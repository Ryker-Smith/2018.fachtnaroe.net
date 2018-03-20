#!/usr/bin/perl
use Cwd;
#
# PROG:		Fix <!-- # vs <!--# from Digiweb files
# OBJECT:	Recurse dirs, find .shtml files, fix
# AUTHOR:	FAROE
# DATE:		10/2013
#
my @parms=@ARGV;
my $prog=$0;
my $dir=$parms[0];
# show where we're at
print "Doing: [$dir]\n";
chdir($dir);
opendir (DIR, $dir);
# cycle through the dir
while (my $file= readdir(DIR)) {
   # only do html/shtml
   if ($file =~ m/\.html$|\.shtml$/) {
      print "Fixing: $file\n";
#      system("sed -i s'/<!-- #exec/<!--#exec/' $file");
      system("sed -i s'/<!--#exec cgi/<!--#include virtual/' $file");
 #<!--#exec cgi
  }
}
