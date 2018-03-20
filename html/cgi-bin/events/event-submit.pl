#!/usr/bin/perl
require "htmlutilities.lib";
require "event-common.lib";
require "cgi-lib.pl";

use Net::POP3;

print &PrintHeader;
print &HtmlTop;
&ReadParse (\%input);
$returnto=$input{'returnto'};
$pass = $input{'pass'};
$userid = $input {'userid'};
open (AUTHFILE, "< $authfile");
@authlist = <AUTHFILE>;
close (AUTHFILE);
&CommonTitle;
#&CommonBody;
print ("<div id=\"content\">
<h1>Event Submission Details:</h1><h3>");
$authorised = 0;
foreach $person (@authlist)
{
 chomp $person;
 if ($userid eq $person)
 {
  $authorised = 1;
 }
}

if ($authorised == 1)
{
 # Use the POP3 server as a login authenticator
 $pop = Net::POP3->new ($pop3server);
#=========================================
#$res = 1; # REMOVE THIS WHEN UNCOMMENTING!!!
#=========================================
 $res = $pop->login ($userid,$pass);
 
 if ( $res eq $error)
 {
  print "Failed to authenticate."; 
  print '<I>Check your password!!!</I>';
 }
 else
 {
  print ("Authentication granted. User is cleared for submission.<HR>");
  $filename = $input{'filename'};
  @eventdetail = $input{'details'};
  print "FILENAME=</B>$filename<P><B>DETAILS=</B>";
  foreach $lines (@eventdetail)
  {
   print "<BR>$lines";
  }
  open (EVENTFILE, "> $filename");
#  system ("chmod 766 $filename");
  print (EVENTFILE @eventdetail);
  close (EVENTFILE);
  # Log submission
  $logfilename="events.log";
  open (LOGFILE,">> $logfilename");
  print (LOGFILE "=================================\n");
  print (LOGFILE "USER: $userid\t ($filename)\n");
  print (LOGFILE @eventdetail);
  print (LOGFILE "\n");
  close (LOGFILE);
 
 }
}
else
{
 print "You are not authorised to make modifications to the events list. Contact the system administrator.";
}
print "<CENTER><HR>Click <A HREF=\"event-list.pl#$returnto\">here</A> to return to the events list.</h3>";
&PrintVersion;
print &HtmlBot;
