#!/usr/bin/perl

# Add in necessary modules, define constants
$error = undef;
# TO DO:
# Constants such as destination and pop3server should be moved to an external .conf file
$pop3server = 'linux2';
use Net::POP3;
#@duedates = ("EMPTY", "20011026", "20011220", "20020531", "20020531");
# This line changed to permit submission of assigns 1 & 2 - this submission
# mechanism wasn't in place for those assignments
@duedates = ("EMPTY", "20050211", "20050514");
$destination = 'fachtna@cti-clonmel.ie';

# Specify libraries required
require "subparseform.lib";
require "htmlutilities.lib";
require "commonsubmit.lib";

&Parse_Form;
&ContentType;
&nicefont;
print "<head>
 <title>Central Technical Institute Intranet</title>
	<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"/style.css\" />
	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
</head>
<div id=\"content\">
<h1>Program Submission</h1>";

#print "<LINK rel=stylesheet href=\"/stylesheets/mainstyle01.css\" type=\"text/css\">";
#print "<P>";

# This program compares dates of form YYYYMMDD
($sec,$min,$hour,$mday,$mon,$year) = gmtime;
$mon = $mon + 1;
$year = $year + 1900;
if ($sec  < 10) { $sec  = '0'.$sec;  }
if ($min  < 10) { $min  = '0'.$min;  }
if ($hour < 10) { $hour = '0'.$hour; }
if ($mon  < 10) { $mon  = '0'.$mon;  }
if ($mday < 10) { $mday = '0'.$mday  }

$fancydate = $year.$mon.$mday;
$fancytime = $hour.':'.$min.':'.$sec;

# Check validity of userid submitted
$userid = $formdata{'userid'};
if ($userid eq "nouseridgiven")
{
 &MissingDataErrorMessage ("No name was given!");
 exit;
}
else
{
 &Bold;
 print "UserID is:";
 &NoBold;
 print " $userid.";
}

# Check validity of assignnum submitted
$assignnum = $formdata{'assignnum'};
print "<P>";
if (  ($assignnum ne "1") 
   && ($assignnum ne "2")
   && ($assignnum ne "3")
   && ($assignnum ne "4") )
{
 &MissingDataErrorMessage ("No assignment # was chosen!");
 exit;
}
else
{
 &Bold;
 print "Assignment # is:";
 &NoBold;
 print "  $assignnum.";
}
&Bold;
print "<P>Assignment Due Date: ";
&NoBold;
print "$duedates[$assignnum]<P>";

if ( $fancydate > $duedates[$assignnum] )
{
 &MissingDataErrorMessage ("The submission date for that assignment has passed.", 1);
 &MissingDataErrorMessage ("Your submission cannot be accepted.", 1);
 exit;
}

# Identify the connected host
$remote_IP = $ENV{'REMOTE_ADDR'};
$remote_HOST= $ENV{'REMOTE_HOST'};
&Bold;
print "<P>Remote IP Address is: ";
&NoBold;
print "$remote_IP (";
#$remotehostname = gethostbyaddr $remote_IP, pf_inet;
print $remote_HOST;
print ') <P>';

#$sourcecode = $formdata{'sourcecode'};

&Bold;
print "<P>Authenticating user: ";
&NoBold;

# Use the POP3 server as a login authenticator
$pop = Net::POP3->new ($pop3server);
$pass = $formdata{'password'};
$res = $pop->login ($userid,$pass);
if ( $res eq $error)
{
 &MissingDataErrorMessage ("Failed to authenticate.", 1);
 print '(<I>Check your password!!!</I>)';
 exit;
}
else
{
 print ("Authentication granted. User is cleared for submission.");
}
# Terminate connection to login server
$pop->quit();

print "<P>";

# Add username, assignment number, and .c extension to form the filename. Separate with dots.
$filename = $userid.'.'.$assignnum.'.c';
&Bold;
print 'File identifier is: ';
&NoBold;
print $filename;
&Bold;
print '<P>Progress:<P>';
&NoBold;

($dev, $ino, $mode, $nlink, $uid, $gid, $rdev, $size )= stat "$submitfilepath$filename";

if ($ino != 0) 
{
 print 'File already exists, overwriting.';
 chmod 777, "$submitfilepath$filename";
 $outcome = system ("rm -f $submitfilepath$filename");
# print ("<P>$submitfilepath$filename<P>Removal Result: $outcome");
 chmod 777, "$submitfilepath$filename.exe";
 $outcome = system ("rm -f $submitfilepath$filename.exe");
# print ("<P>$submitfilepath$filename.exe<P>Removal Result: $outcome");
}
else
{
 print 'Creating new submission file.';
}

@sourcecode = $formdata{'sourcecode'};
# Print a small header into the submission
unshift (@sourcecode,
"/*\n",
"========================================================\n",
"                 COMPILATION SUCCESSFUL                 \n",
"Submitted on: $fancydate at: $fancytime from: $remote_IP\n",
"                  From user: $userid                    \n",
"========================================================\n",
"*/\n");
# Open submission file
open (SFILE,">$submitfilepath$filename");
flock (SFILE, 2);
print SFILE @sourcecode;
flock (SFILE, 8);
close (SFILE);
print '<P>File creation completed.';
#&postit;
#&BigText;&Bold;
#print '<P>Program Submission Completed.';
#&NoBigText;&NoBold;

system ("gcc $submitfilepath$filename -lncurses -o $submitfilepath$filename.exe");
($dev, $ino, $mode, $nlink, $uid, $gid, $rdev, $size )= stat "$submitfilepath$filename.exe";
if ($ino !=0)
{
 print "<P>Compilation succeeded.<P>";
 &postit;
 &BigText;&Bold;
 print '<P>Program Submission Completed.<P>';
 &NoBigText;&NoBold;
}
else
{
 print "<P><BIG><BIG><FONT COLOR=RED>Compilation FAILED!";
}
exit;

###### SubRoutine Section ##############

sub postit {
#print ("Z<P>");
#system ("su - $userid");
#print ("Y<P>");
$destination = "fachtna\@cti-clonmel.ie";
system ("mail -s COMPPROG-$assignnum -c $userid\@cti-clonmel.ie $destination < $submitfilepath$filename");
#print ("X<P>");
#$destination = "fachtna\@cti-clonmel.ie";
#print ("G<P>");
#open (MAIL, "| /bin/mail -t");
#print ("A<P>");
#print MAIL "To: $destination\n";
#print ("B<P>");
#print MAIL "From: $userid\n";
#print ("C<P>");
#print MAIL "Subject: COMPPROG-$assignnum\n";
#print ("D<P>");
#print MAIL @sourcecode;
#print ("E<P>");
#close (MAIL);

#$destination = "$userid\@cti-clonmel.ie";
#open (MAIL, "| /usr/sbin/sendmail -t");
#print MAIL "To: $destination\n";
#print MAIL "From: fachtna\@cti-clonmel.ie\n";
#print MAIL "Subject:Programming Assignment $assignnum\n";
#print MAIL @sourcecode;
#close (MAIL);

print ("<P>MAIL routine completed.");
}

sub MissingDataErrorMessage {
 &RedColor;
 &BigText; &BigText;
 print "$_[0]<P>";
 &NoBigText; &NoBigText;
 &BlackColor;
 if ("$_[1]" != 1)
  { &BackButton; };
}

