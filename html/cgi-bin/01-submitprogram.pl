#!/usr/bin/perl
require "htmlutilities.lib";
require "commonsubmit.lib";
# HTML header
print "Content-type: text/html\n";
&ContentType;
# Display the top of page.
&section1;
# Display the offer to link to the automatic formatting pages
#&section3;

# This is just TEMPORARY!
#print '<FONT COLOR=RED><BIG><BIG>Please note that all submission dates have now passed.</BIG></BIG></FONT>';
print '<HR>';
# Display the form proper with the student names etc.
&section2;
# USe the empty text area
&section4;
# Close the form
&section6;
