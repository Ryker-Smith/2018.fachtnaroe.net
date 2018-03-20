#!/usr/bin/perl
require "htmlutilities.lib";
require "event-common.lib";
require "cgi-lib.pl";

print &PrintHeader;
#print &HtmlTop;
&ReadParse (\%input);
$filename=$input{'filename'};
$month=$input{'month'};
$day=$input{'day'};
$dow=$input{'dow'};
$returnto=$input{'returnto'};

print "<html><head>
<script type=\"text/javascript\" src=\"http://fachtnaroe.servehttp.com/fckeditor/fckeditor.js\"></script>
<script type=\"text/javascript\">
window.onload = function()
{
var oFCKeditor = new FCKeditor( 'details', '100%', '350') ;
oFCKeditor.ToolbarSet = 'Custom';
//oFCKeditor.ToolbarSet = 'Basic';
oFCKeditor.BasePath = '/fckeditor/' ;
oFCKeditor.ReplaceTextarea() ;
}
</script>

<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"http://webmail.cti-clonmel.ie/style.css\" />
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />

<title>$dow, $month, $day</title></head><body>

<div id=\"content\"><h1>$dow, $month $day</h1>\n
<h2>Please enter the event information below:<br>
<h2>Please use the <b>ruler</b> tool as a separator between items.</h2>
<center><form  name=\"submitform\" method=\"post\" action=\"event-submit.pl\">
<input type=\"hidden\" name=\"filename\" value=\"$filename\">
<input type=\"hidden\" name=\"returnto\" value=\"$returnto\">\n
<textarea name=\"details\" rows=\"20\" cols=\"60\">";

if (-e $filename)
{
  open (EVENTFILE, "< $filename");
  @eventdetail = <EVENTFILE>;
  close (EVENTFILE);
  foreach $lines (@eventdetail)
  {
   print "$lines";
  }
}
else
{
 print "Event Details Not Present\n";
}
print "</textarea><p>";
print "<h3>Username:&nbsp;<input type=\"text\" width=\"20\" name=\"userid\">
&nbsp;&nbsp;
Password:&nbsp;<input type=\"password\" width=\"20\" name=\"pass\">&nbsp;&nbsp;
<input type=\"submit\" value=\"Click to save\">
</h3></form>";
print "<h3>Click <a href=\"event-list.pl#$returnto\">here</A> to return to the events list.</h3><br>";
&PrintVersion;
print "\n</div></body></html>";
