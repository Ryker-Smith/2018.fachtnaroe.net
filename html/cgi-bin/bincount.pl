#!/usr/bin/perl
print "
<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" 
\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\" xml:lang=\"en\">
<head>
 <title>Central Technical Institute Intranet</title>
	<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"/style.css\" />
	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
</head>
<body>
<a name=\"top\"></a>
<div class=\"hide\">Skip to:<a href=\"#info\">content</a>, <a href=\"#navigation\">navigation</a></div>
<div id=\"logo\"><h1>CTI-Clonmel Intranet</h1></div><br clear=\"all\" />

<div id=\"content\">
<h1>Binary Count 0-255</h1>
";
 print ("<center><table width=\"25%\" border=\"1\">");

 $counter=0;
 while ($counter <= 255)
 {
  $number=$counter;
 print ("<tr><td width=\"30%\"><h3>$counter</td><td width=\"5%\"><h3>is:</td><td valign=\"center\" width=\"65%\"><h3>");
 if ( ($number >=0) && ($number<=255) )
 {
  if ($number>=128)
  {
   print ("1");
   $number=$number-128;
  }
  else
  {
   print ("0");
  }
  if ($number>=64)
  {
   printf ("1");
   $number=$number-64;
  }
  else
  {
   printf ("0");
  }  if ($number>=32)
  {
   printf ("1");
   $number=$number-32;
  }
  else
  {
   printf ("0");
  }  
  if ($number>=16)
  {
   printf ("1");
   $number=$number-16;
  }
  else
  {
   printf ("0");
  } 
  if ($number>=8)
  {
   printf ("1");
   $number=$number-8;
  }
  else
  {
   printf ("0");
  }  
  if ($number>=4)
  {
   printf ("1");
   $number=$number-4;
  }
  else
  {
   printf ("0");
  }  
  if ($number>=2)
  {
   printf ("1");
   $number=$number-2;
  }
  else
  {
   printf ("0");
  }
  if ($number>=1)
  {
   printf ("1");
   $number=$number-1;
  }
  else
  {
   printf ("0");
  }
  printf ("</td></tr>");
  $counter=$counter+1;
 }
}
 print ("</table></center>");
 print ("<br><br></body><html>");

