#!/usr/bin/perl 
#
# Dom's Guestbook v. 0.2.0
# (c) 2001 Dominic Hargreaves <dom@earth.li>
#

### Initialize stuff ###

use strict;
use CGI::Pretty qw(:standard);

sub formatdate;
sub getform;
sub processform;
sub display;

# Read in options from config file

require "./dgb.config.pl";

# Nothing more user-servicable

use vars qw($sendmail $recipient $datafile $headerfile $footerfile 
            $def_entries $display_introtext $home_url $send_email);

my $debug = undef;     # Debug parameter - currently unused
#$debug = 1;

my $version = "0.2.0";
my $entries = $def_entries; # Number of entries per view - make user modifable?
my $urlre = '^(.+)\:\/\/(.+\/?)'; # regexp for valid URL
my $bdemailre = '(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)';  # regexp for a bad email
my $gdemailre = '^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$';

$ENV{"PATH"} = ""; # required to untaint

### End initialization ###

### Main code ###

# Print header HTML

print "Content-type: text/html\n\n";
open HEADERFILE, $headerfile or die("File error!: $!");
print while (<HEADERFILE>);
close HEADERFILE;

&Navigation; # Present standard nav bar on left
print "<div id=\"content\">";

# Temporary identification of remote host:
print "IP: $ENV{'REMOTE_ADDR'}"; #<br>Host: $ENV{'REMOTE_HOST'}";

if ( param("action") and param("action") eq "submit" ) {  # Submit form
   # processform() returns and array of error strings
   my @retval = processform;
   if ($retval[0]) {
      print "<h1>Submission Error!</h1><h3>There was a problem with your entry:"
        .   "<pre>";
      for (@retval) {
         print "$_\n";
      }
      print "</pre>\nPlease use your back button to correct the problem(s).";
   } else {
      print ("<h1>Thanks!</h1><h3>Thanks for adding to the guestbook!<p>You\'ll be taken back to the guest book in a moment. <meta http-equiv=\"refresh\" content=\"4; url=dgb.pl\"></h3>");
      print "<a href=\"" . url . "?action=display\">Return to guestbook</a>";
   }
} elsif ( param("action") and param("action") eq "getform" ) {
   getform;
} elsif ( param("action") and param("action") eq "display" ) {
   display;
} else {
   display;
}

# Print footer HTML
open FOOTERFILE, $footerfile or die("File error!: $!");
print while (<FOOTERFILE>);
close FOOTERFILE;

### End main code ###

### Subroutines ###

sub processform {
   my @errors;

   # Check for valid email address
   if (param("email") =~ /$bdemailre/ or 
   (param("email") !~ /$gdemailre/) and param("email")) {
      push (@errors, "Invalid email address");
   } 

   # Check for valid URL
   if (param("url") !~ /$urlre/ and param("url")) {
      push (@errors, "Invalid URL")
   } 

   # Check for non-blank name
   push (@errors, "Blank name") unless param("name");   

   # Abort if there were errors
   return @errors if @errors;

   my $illegal = '([\n\r])';
   open OUTFILE, ">> $datafile" or die("File error!: $!");
   my @input;
   $input[0] = param("name") or $input[0] = "";  # Name (Shouldn't be blank)
   $input[1] = param("email") or $input[1] = ""; # Email address
   $input[2] = param("url") or $input[2] = "";   # URL
   $input[3] = param("location") or $input[3] = "";  # Location

   # What privacy level?
   # (0 = none, 1 = obfuscate email, 2 = don't display email)
   $input[6] = 0;
   $input[6] = param("privacy") if param("privacy");

   $input[7] = param("comments") or $input[7] = "";

   # Comments are allowed newlines, but give them a special marker
   $input[7] =~ s/\n/%NEWLINE/g;

   # Sanitise input
   for (0, 1, 2, 3, 7) {
      $input[$_] =~ s/$illegal//g;
      $input[$_] =~ s/&/&amp;/g;
      $input[$_] =~ s/\"/&quot;/g;
      $input[$_] =~ s/</&lt;/g;
      $input[$_] =~ s/>/&gt;/g;
      $input[$_] =~ s/�/&pound;/g;
      $input[$_] =~ s/%%//g;
   }

   # Limit on field lengths
   for (0, 1, 2, 3) {
      $input[$_] = substr($input[$_], 0, 200);
   }

   # Comment can be longer
   $input[7] = substr($input[7], 0, 2096);

   # One character only
   $input[6] = substr($input[6], 0, 1);

   # Output the result to datafile
   print OUTFILE $input[0]."%%".$input[1]."%%".$input[2]."%%"
   .$input[3]."%%".time."%%".$ENV{"REMOTE_HOST"}."%%".$input[6]."%%"
   .$input[7]."\n";
   
   close OUTFILE;

   if ($send_email == 1) {
      # Send email
      open MAIL, "|$sendmail -t -oi" or die $!;
      if ($input[1]) {
         print MAIL "From: $input[1]\n"
      } else {
         print MAIL "From: $recipient\n";
      }
      print MAIL "To: $recipient\n";
      print MAIL "Subject: Guestbook submission\n";
      print MAIL "X-Mailer: dgb.pl v. $version\n";
      print MAIL "\nThe following submission was made from ".
                 $ENV{"REMOTE_HOST"}.":\n\n";
      print MAIL "Name: $input[0]\n";
      print MAIL "Email address: $input[1]\n";
      print MAIL "URL: $input[2]\n";
      print MAIL "Location: $input[3]\n";
      $input[7] =~ s/%NEWLINE/\n/g;
      print MAIL "\nComments:\n$input[7]\n\n";
      print MAIL "Privacy option: ";
      if ($input[6] == 0) {
         print MAIL "none";
      } elsif ($input[6] == 1) {
         print MAIL "obfuscate email";
      } elsif ($input[6] == 2) {
         print MAIL "don't display email";
      } else {
         print MAIL "unknown (value $input[6])";
      }
      print MAIL ".\n";
      close MAIL;
   }

   return undef; # There weren't any errors
}

sub display {
   my $counter = 0; # Initialize counter
   my $reverse = "yes";  # Default display mode
   my $abort = 0; # Flag to work out of there is more data to come
   $reverse = param("reverse") if param("reverse");
   my $offset = 0;  # Start at beginning of file unless otherwise stated
   $offset = param("offset") if param("offset");

   # Print intro text
   print ($display_introtext);
   print "<hr><h3>\n";
   print "[<a href=\"$home_url\">home</a>] ";
   print "[<a href=\"".url."?action=getform\">sign</a>] ";
   if ($reverse eq "yes") {
      print "[<a href=\"".url."?action=display&amp;reverse=no\">ascending</a>] ";
   } else {
      print "[<a href=\"".url."?action=display&amp;reverse=yes\">descending</a>] ";
   }
   print "<hr>\n";
   open INFILEDATA, $datafile or die ("File error!: $!");

   # This isn't particularly efficient because it has to read the whole file
   # into memory, but it's the only simple solution I can find if there is to
   # be the option of reversing the output.

   my @lines = <INFILEDATA>;
   @lines = reverse @lines if ($reverse eq "yes");

   while ($_ = shift @lines) {
      # remove comments and blank lines, assume everything else it an entry.
      next if /^(\#|\n)/;

      if ($counter < $offset) {
         $counter++;
         next;
      }
      if ($counter == $entries + $offset) {
         $abort = 1;
         last;
      }
      my @entry = split /%%/, $_;
      $entry[7] =~ s/%NEWLINE/<br>/g;
      if ( $entry[2] and $entry[2] !~ /^(http|ftp)\:\/\// ) {
         $entry[2] = "http://$entry[2]";
      }
      print "<strong>Name:</strong> $entry[0]\n" if $entry[0];
      if ($entry[1] and !($entry[6] == 2)) {
         $entry[1] =~ s/@/ [at] /g if ($entry[6] == 1);
         print "\&lt;<a href=\"mailto:$entry[1]\">$entry[1]</a>\&gt;\n";
      }
      print "<br><strong>URL:</strong> <a href=\"$entry[2]\">$entry[2]</a>\n" if $entry[2];
      print "<br><strong>Location: </strong>$entry[3]\n" if $entry[3];
      print "<br><strong>Date:</strong> ". formatdate($entry[4]). "\n" if $entry[4];
      print "<br><strong>Comment:</strong><br> $entry[7]\n<br>" if $entry[7];
      print "<hr>";
      $counter++;
   }

   close INFILEDATA;

   # If we are at the end, adjust the counter so the offset doesn't go screwy
   if ($abort == 0) {
      while (!($counter % $entries == 0)) {
         $counter++;
      }
   }

   # Calculate the offset needed to get back to the previous page
   my $prev_offset = $counter - 2 * $entries;

   if ($prev_offset >= 0) {
      print "[ <a href=\"" . url . "?action=display&amp;reverse=$reverse&amp;offset=$prev_offset\">Previous $entries entries</a> ]\n";
   }

   # If we have more pages to go, display a link to the next one
   if ($abort == 1) {
      print "[ <a href=\"" . url . "?action=display&amp;reverse=$reverse&amp;offset=$counter\">Next $entries entries</a> ]\n";
   }
}

sub formatdate {
   my $time;
   if ( defined $_[0] ) {
      $time = $_[0];
   } else {
      $time = time();
   }

   my @datethings = localtime($time);
   my $day = $datethings[3];
   my $month = $datethings[4] + 1;
   my $year = $datethings[5];
   my $hour = $datethings[2];
   my $minute = $datethings[1];

   if (length($day) == 1) {
      $day = "0$day";
   }
   if (length($month) == 1) {
      $month = "0$month";
   }
   if (length($hour) == 1) {
      $hour = "0$hour";
   }
   if (length($minute) == 1) {
      $minute = "0$minute";
   }
   $year = 1900 + $year;

   my $thedate = "$year-$month-$day, $hour:$minute";
}

sub getform {
    print "<form method=\"post\" action=\"". url . "\">\n<h1>Post A Comment On The Blog</h1>"
      .   "<table border=\"0\">"
      .   "<INPUT TYPE=\"hidden\" NAME=\"action\" value=\"submit\">"
      .   "<tr><td><b>Name</td><td>". textfield("name"). "</td></tr>\n"
      .   "<tr><td><b>Email address</td><td>". textfield("email"). "</td></tr>\n"
      .   "<tr><td><b>URL</td><td>". textfield("url"). "</td></tr>\n"
      .   "<tr><td><b>Location</td><td>". textfield("location"). "</td></tr>\n"
      .   "<tr><td><b>Comments</td><td><textarea name=comments COLS=50 ROWS=6>"
      .   "</textarea></td></tr>\n"
      .   "<tr><td><b>Privacy</td><td>\n" 
      .   "<input type=\"radio\" name=\"privacy\" value=\"0\" checked> None<br>\n"
      .   "<input type=\"radio\" name=\"privacy\" value=\"1\"> Obfuscate email (use [at] instead of @)<br>\n"
      .   "<input type=\"radio\" name=\"privacy\" value=\"2\"> Don't display email address on web page\n"
      .   "</td></tr>"
      .   "<tr colspan=\"2\"><td><input type=submit value=Submit></td></tr>"
      .   "</table></form>\n";
      print "<h3>NB: All fields are optional except for \"Name\"</h3>";
}

sub Navigation {
	use LWP 5.64;
	my $browser = LWP::UserAgent->new;
	my $navcontent="http://www.fachtnaroe.com/navigation.shtml";
	my $navstuff = $browser->get($navcontent);
	print $navstuff->content;
	print "\n";
}

### End subroutines ###
