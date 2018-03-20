#!/usr/local/bin/perl
# test.pl v6.01.18
# (c)2002-2006 Cusimano.Com Corporation, all rights reserved

$www = $ENV{'SERVER_PORT'} ne "";
eval "use Compress::Zlib"; $hasCompress = $@ ? 0 : 1;
eval "use LWP"; $hasLWP = $@ ? 0 : 1;
eval "use LWP::Simple"; $hasLWPsimple = $@ ? 0 : 1;
if ($hasLWPsimple) {
	eval "use LWP::UserAgent";
	my $ua = LWP::UserAgent->new(timeout => 30);
	$u = "http://www.c3scripts.com/test/test.txt";
	$resp = $ua->request(HTTP::Request->new('GET', $u));
	$okLWP = $resp->content =~ /test\.pl/i;
}
eval "use CGI::Carp qw(fatalsToBrowser)"; $hasCGI = $@ ? 0 : 1;
$w = 16; $f = "<b>%" . $w . "s</b> : %s\n"; $f2 = " " x $w . " & %s\n";
print "Content-type: text/html\n\n<html><body><pre>" if ($www);
printf $f, "test.pl", "v6.01.18";
printf $f, "Perl", "v$]";
printf $f, "CGI::Carp", ($hasCGI? "" : "not ") . "installed";
printf $f, "Compress::Zlib", ($hasCompress? "" : "not ") . "installed";
printf $f, "LWP", ($hasLWP? "v$LWP::VERSION " : "not ") . "installed";
printf $f, "LWP::Simple", ($hasLWPsimple? "" : "not ") . "installed";
printf $f, "LWP::Simple", "rx " . ($okLWP? "" : "not ") . "ok" if ($hasLWPsimple);
printf $f, "\@INC", $INC[0]; foreach $x (1..$#INC) { printf $f2, $INC[$x];}
foreach $x (sort split(",",
  "DOCUMENT_ROOT,SCRIPT_FILENAME,PATH_INFO,PATH_TRANSLATED,".
  "REQUEST_FILENAME,HTTP_HOST,SERVER_SOFTWARE"))
    { printf $f, $x, $ENV{$x} }
print "</pre></body></html>\n" if ($www);
1;