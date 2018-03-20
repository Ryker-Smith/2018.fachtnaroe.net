#!/usr/local/bin/perl
#use IO::File;

print "Content-type: text/html\n";
print "<HTML><BODY>";
print "<BR>\n";
print "<BR><H1>$thisdir<BR></H1><HR>";
$directory = "C:\\Program Files\\MVVR-100\\Data";
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
   print "$fln<BR><IMG SRC=\"$fln\"><BR>\n";
  }
 }
}
print "<BR>";

