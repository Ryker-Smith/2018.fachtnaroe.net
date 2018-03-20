#!/usr/bin/perl
require File::stat;

$CALENDAR_LOCATION="/var/www/html/calendar/";
$PWD="pwd";
#system ("cd /var/www/html/calendar");
#print "1",$CALENDAR_LOCATION;
#print ("2",system ("pwd"),"\n");
opendir $thedir, $CALENDAR_LOCATION;
@dir_contents=readdir $thedir;
foreach $file (@dir_contents[7])
{
# @details=stat($CALENDAR_LOCATION+$file);
# print $details[7],"\n";
 print $CALENDAR_LOCATION+$file,"\n";
}
