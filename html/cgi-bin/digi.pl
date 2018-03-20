#!C:\perl\bin\perl.exe
# previous line added to support Apache 1/2
# please adjust to your own Perl path!
use strict;
use CGI;

my $page = new CGI;
my $msg = "Hello from ActivePerl CGI!";

# print header and start the markup output
print $page->header( "text/html" ),$page->start_html( $msg );
print $page->h2($msg);
print $page->end_html;
# end code