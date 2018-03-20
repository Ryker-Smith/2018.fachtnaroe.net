/*
 This program converts a number from binary to decimal;
 It reads in a string of 8 characters which may be "1" or "0".

 The program then loops through the eight characters entered
 and when a "1" is encountered adds the corresponding binary
 place value to the final answer.

 Note that the string is an 'array' of characters. Though 
 there are 8 of them, their places are numbered from 0 to 7.

 The program deals only with 8-bit binary numbers (ie values
 in the range 0-255) yielding a possible 256 values.
*/
#include <stdio.h>
main ()
{
 char binary[8];
 int counter, placevalue, decimal;
 printf ("This program converts numbers from 8-digit binary\n");
 printf (" into the decimal number system.\n\n");
 printf ("Enter an 8-digit binary number: ");
 scanf ("%s", &binary);
 decimal=0;
 counter=0;
 placevalue=128;
 while (counter <= 7)
 {
  if (binary[counter] == '1')
  {
   decimal=decimal+placevalue;
  }
  counter++;
  placevalue=placevalue/2;
 }
 printf ("\nThe decimal value is: %d\n",decimal);
}
