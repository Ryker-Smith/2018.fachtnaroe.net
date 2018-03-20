/*
 This program converts a number from decimal to binary;
 It successively determines if the decimal value exceeds
 the pre-defined place values for the binary number system.
 
 If the tested value is in excess then a "1" is output,
 otherwise a "0" is output. In the event of a "1" the tested
 value is decremented (reduced) by the binary place value 
 and the process continues.

 The program deals only with values in the range 0-255 (ie
 an 8-bit binary number).
*/
#include <stdio.h>
main ()
{
 int number;
 printf ("This program converts an integer (from the decimal\n");
 printf (" counting system) into a binary number.\n\n");
 printf ("Please enter a number in the range 0-255: ");
 scanf ("%d", &number);
 printf ("\n\nThat number in binary is:\n");
 if ( (number >=0) && (number<=255) )
 {
  if (number>=128)
  {
   printf ("1");
   number=number-128;
  }
  else
  {
   printf ("0");
  }
  if (number>=64)
  {
   printf ("1");
   number=number-64;
  }
  else
  {
   printf ("0");
  }  if (number>=32)
  {
   printf ("1");
   number=number-32;
  }
  else
  {
   printf ("0");
  }  
  if (number>=16)
  {
   printf ("1");
   number=number-16;
  }
  else
  {
   printf ("0");
  } 
  if (number>=8)
  {
   printf ("1");
   number=number-8;
  }
  else
  {
   printf ("0");
  }  
  if (number>=4)
  {
   printf ("1");
   number=number-4;
  }
  else
  {
   printf ("0");
  }  
  if (number>=2)
  {
   printf ("1");
   number=number-2;
  }
  else
  {
   printf ("0");
  }
  if (number>=1)
  {
   printf ("1");
   number=number-1;
  }
  else
  {
   printf ("0");
  }
  printf ("\n");

 } //if
 else
 {
  printf ("Invalid number entered.\n");
 }

}
