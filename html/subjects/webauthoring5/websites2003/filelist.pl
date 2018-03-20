#!/usr/bin/perl

# use IO::File;

print "Content-type: text/html\n";
print "<HTML><BODY>";
print "<BR>\n";
print "<BR><H1>$thisdir<BR></H1><HR>";
print "<TABLE WIDTH=75% BORDER=1>";
#$directory = "C:\\Program Files\\MVVR-100\\Data";
$directory = "fieldtrip01";
# $directory = "/e:/4179/informationtechnologyservices.ie/user/htdocs/ul2002/CDROM/week4/Clipart/";
$currentdir = $directory;
# print "CH:";
chdir($currentdir) || &error;
# print "OP:";
opendir(DIR, "./") || &error;
# print "RD:";
push (@files, readdir(DIR)) || &error;
closedir(DIR);
foreach $fln (@files)
{
 if (($fln ne ".") && ($fln ne ".."))
 {
  if (-e $fln)
  {
   print "<TR><TD><B>$fln</B><BR><IMG SRC=\"$fln\"><BR>\n";
  }
 }
}
print "<BR></TABLE></BODY></HTML>";

