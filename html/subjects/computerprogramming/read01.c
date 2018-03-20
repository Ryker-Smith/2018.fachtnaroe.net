#include <stdio.h>
// Following value is item count less 1 as we start at 0 in an array. Change as items are added 
// to the file of items.
#define MAXACTUAL 15
#define MAXITEMS 20
#define EAN 13
#define BARCODESFILE "barcodes.dat"
#define PRODUCTSIZE 20

// These 3 arrays are global to the program, as they are not declared in any one function.

 float price[MAXITEMS];
 char barcode[MAXITEMS][EAN+1];
 char product[MAXITEMS][PRODUCTSIZE];

int main ()
{
 load_barcodes ();
 print_barcodes_loaded ();

 // Put the rest of your program, based on your first assignment, here!

}


int load_barcodes ()
{
	// To avoid WARNINGs on compilation use gcc -w 
 	FILE *infile;
	int i;
	infile = fopen(BARCODESFILE,"r");
	printf ("ITEM\tBARCODE\t\tPRODUCT\t\t\t\tPRICE\n");
	for (i=0;i<=MAXACTUAL;i++)
	{
 	 fscanf (infile, "%f %s %s", &price[i], &barcode[i], &product[i]);
	 // This next line may cause a WARNING on compilation
	 barcode[i][EAN+1]=NULL;  // Make the EAN string Null terminated
	 // This next line may cause TWO WARNINGS upon compilation
	 product[i][strlen(product[i])+1]=NULL; // Null terminate the description
	}
}

int print_barcodes_loaded ()
{
	int i;
	for (i=0;i<=MAXACTUAL;i++)
	{
	 printf ("%2d)\t%s\t%s\t\t\t%5.2f\n", i, barcode[i], product[i], price[i]);
	}
}
