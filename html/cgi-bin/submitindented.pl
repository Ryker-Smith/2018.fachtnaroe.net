#!/usr/bin/perl
require "htmlutilities.lib";
require "subparseform.lib";
require "commonsubmit.lib";

&Parse_Form;
&ContentType;

$filename = $formdata {'tempfilename'};
&section1;
print "<HR>";
&section2;
&section5;
&section6;

