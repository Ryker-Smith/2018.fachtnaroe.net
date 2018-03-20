#!/usr/bin/perl
require "htmlutilities.lib";
require "event-common.lib";

&ContentType;

# These values should be changed manually each year.
$yearstart=2005;
$yearend=2006;
$thisyear=$yearstart;
# The first of August falls on a Monday so daycount starts at 0
$daycount = 0;

foreach $onemonth (@months)
{
 $months{$onemonth}= "31";
}
$months{"September"} = "30";
$months{"April"} = "30";
$months{"June"} = "30";
$months{"November"} = "30";

# Try to sort out leap years. I think there's a rule about 1000's as well...
if ( (($yearend % 4) == 0) && (($yearend % 400) != 0) )
{
 $months{"February"} = 29;
}
else
{
 $months{"February"} = 28;
}

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
$year = $year+1900;
$mon++;
if ($mon < 10) {
 $mon = "0".$mon; }
if ($mday < 10) {
 $mday = "0".$mday; i}
$todayis = $year.$mon.$mday;

&CommonTitle;
#&CommonBody;
print "<div id=\"content\"><center><h1>Calendar $yearstart-$yearend</h1>";
print "<table border=\"1\" width=\"85%\">";
$monthcount = 8;
foreach $onemonth (@months)
{
 print ("<tr><td colspan=\"4\" valign=\"center\"><a name=\"$onemonth\"><b>$onemonth</b></a></td></tr>");
 if ($monthcount > 12) {
  $monthcount = 1; 
  $thisyear = $yearend;
 }
 $monthcode = $monthcount;
 if ($monthcode < 10) {
  $monthcode = "0".$monthcode; }
 $monthcount++;
 for ($day=1; $day <= @months{$onemonth}; $day++)
 {
  $today = $daycount % 7;
  $daycount++;
  if ($day < 10) {
   $filename = $monthcode."0".$day;
  }
  else {
   $filename = "$monthcode$day";
  }
  $filename = $thisyear.$filename;
  $fulldate = $filename;
  $filename = $eventdirectory.$filename.$extension;
  if (($today == 6) || ($today == 5) ) 
  {
   print ("<tr bgcolor=\"#0775bf\">"); 
   print ("<td align=\"center\" valign=\"center\" width=\"5%\" color=\"#ffffff\"><b>$day</b></td>");
   print ("<td align=\"left\" valign=\"center\" width=\"5%\"><i>$days[$today]</i></td>");
   print ("<td valign=\"center\" color=\"#ffffff\">");
  }
  else 
  {
   print ("<tr>");
   print ("<td align=\"center\" width=\"5%\"><font color=\"#000000\"><b>$day</b></font></td>");
   print ("<td align=\"left\" valign=\"center\" width=\"5%\"><font color=\"#000000\">$days[$today]</font></td>");
   print ("<td valign=\"center\"><font color=\"#000000\">"); 
  }
  if ($fulldate eq $todayis) {
   print "<a name=\"today\"></a>"; }
#  print "$filename";
  if (-e $filename)
  {
   open (EVENTFILE, "< $filename");
   @eventdetail = <EVENTFILE>;
   close (EVENTFILE);
   $linecount = 1;
   $itemcount = 0;
   foreach $line (@eventdetail)
   {
    if ( (index $line, $itemmarker) > -1) {
    if ($itemcount > 0)
    {
     print $itemseparator; 
    } 
   }
    else
    {
     print "$line"; }
     $linecount++;
     $itemcount++;
   }
  }
  else
  {
   print "&nbsp";
  }
  print <<CELLEND;
</font></td><td width="5%" align="center" valign="center"><small>
<a href=\"event-modify.pl?&filename=$filename&month=$onemonth&day=$day&dow=$days[$today]&returnto=$onemonth\">
<font face="verdana">Modify</a></small></td></tr>
CELLEND
 }
}
print "</table>";
&PrintVersion;

