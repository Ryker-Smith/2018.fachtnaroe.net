#!/usr/bin/perl
use CGI;
$cgi = new CGI;
print $cgi->header('text/html; charset=UTF-8');
print "
<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\">
<head>
  <meta http-equiv=\"Content-type\" content=\"text/html;charset=UTF-8\" />
  <title>Sample File Upload Form: Output</title>  
</head>
<body>
  <h2>Sample File Upload Form: Output</h2>
  <hr />";
# Parameter 'dir' is passed from the form. This could be defined here, but leaving this in the form allows
# for a future destination directory selection control in the form if required.
my $dir = $cgi->param('dir');
my $file = $cgi->param('file');
# Temporary control of 'dir' moved to script for debugging
my $dir = "upload/";
my $original_location = $file;
#print "<br />DEBUG: [$dir] [$file]\n";
$file=~m/^.*(\\|\/)(.*)/; # strip the remote path if present and keep the filename
#print "<br />DEBUG: [$dir] [$file]\n";
my $name = $dir.$file;
print "  <br />Remote File Details:\n";
print "  <br />DEBUG: [$original_location]\n";
print "  <br />Local File Details:\n";
print "  <br />DEBUG: [$name]\n";
$opened=open(LOCAL, "> $name") or print "  <br />DEBUG:  [".$!."] (result_text)";
print "  <br />File open for output boolean result:\n";
if (! $opened) {
  print "  <br />DEBUG: [FALSE]";
}
else {
  print "  <br />DEBUG: [TRUE]";
}
print "  <br />DEBUG: [$res] (result_code)\n";
while(<$file>) {
  print LOCAL $_;
}
#print "<br />DEBUG: [$dir] [$file]\n";
print "<br />DEBUG: $file has been successfully uploaded... thank you.\n";
print "
  <p>
  <a href=\"http://validator.w3.org/check?uri=http%3A%2F%2Fwww.fachtnaroe.com%2Fcgi-bin%2Fupload%2Fupload.pl\">
  <img src=\"/images/valid-xhtml10-blue.png\" alt=\"Valid XHTML 1.0 Transitional\" height=\"31\" width=\"88\" border=\"0\"/>
  </a>
  </p>
</body>
</html>";

