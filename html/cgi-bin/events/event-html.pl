#!/usr/bin/perl
require "event-common.lib";
require "htmlutilities.lib";
require "cgi-lib.pl";

$where = "../html/";
($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
$year = $year+1900;
$mon++;
if ($mon < 10) {
 $mon = "0".$mon; }
if ($mday < 10) {
 $mday = "0".$mday; i}
$todayis = $year.$mon.$mday;
$todayis = "20021011";
$filename = $eventdirectory.$todayis.$extension;

print "USING: $filename\n";
open (INFILE, "< $filename");
@eventlist = <INFILE>;
close (INFILE);
$total = scalar @eventlist;
print "$total\n";

$count = 1;
foreach $event (@eventlist) {
 $countcode = $count;
 if ($count <10) {
  $countcode = "0".$countcode; }
 $thisfilename = $todayis."-".$countcode.".html";
 $nextcount = $count;
 $nextcount++;
 if ($nextcount > $total) {
  $nextcount = 1; }
 if ($nextcount < 10) {
  $nextcount = "0".$nextcount; }
 $nextfilename = $todayis."-".$nextcount.".html";
 &HTML ($event, $thisfilename, $nextfilename);
 $count++; }

sub HTML {
 $message = @_[0];
 $thisfile = @_[1];
 $nextfile = @_[2];
 open (OUTFILE, "> $where$thisfile");
 print (OUTFILE "<HTML><BODY><META HTTP-EQUIV=\"refresh\" CONTENT=\"5; URL=$nextfile\">");
 print (OUTFILE "<TABLE ALIGN=CENTER VALIGN=CENTER><TR ALIGN=CENTER VALIGN=CENTER><TD ALIGN=CENTER VALIGN=CENTER>");
 print (OUTFILE "$message\n");
 print (OUTFILE "</TD></TR></TABLE>");
 print (OUTFILE &HtmlBot);
 close (OUTFILE);
}

