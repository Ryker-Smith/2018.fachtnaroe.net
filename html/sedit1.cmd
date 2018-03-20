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
if (-d $dir) {
	chdir ($dir);
	# show where we're at
	print "Doing: [$dir]\n";
	opendir (DIR, $dir);
	# cycle through the dir
	while (my $file= readdir(DIR)) {
	  # for direcyories
	  if (-d $file) {
	    # avoid doing '.' and '..'
	    next if ($file =~ m/^\./);
	    $dir=getcwd;
	    $cmd="/var/www/fachtnaroe.net/htdocs/sedit1.cmd $dir/$file";
	    print "1 $cmd\n";
	    system($cmd);
	    $cmd="/var/www/fachtnaroe.net/htdocs/sedit2.cmd $dir/$file";
	    system($cmd);
	    print "$cmd\n";
	  }
	  
	}
}
