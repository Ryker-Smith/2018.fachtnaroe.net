#include <stdio.h>
#include <curses.h>
#include <string.h>

char gamearray[41][21];

main ()
{
 drawmap ();
}

int drawmap ()
{
 /* the file-handle variable to access the file is called mapfile
    looper is the control variable that controls the reading in of the lines of the map
    oneline is a local variable into which each map line is read, prior ro being copied into the
    main map array called gamearray
 */
 int mapfile, looper;
 char oneline[41];
 /* The man pages fully document the use of the fopen command
    the first parameter is the filename containing the map. The second is the access mode - in this case read-only.
    The file should *not* *not* *not* be a DOS-mode file (with CR, LF line endings). This code won't work properly
    if it is. Use the Linux system and vi to create the map file.
 */
 mapfile = fopen ("maze04.map", "r");
 looper = 0;
 /* The loop executes until no more (a NULL quantity) of characters are available to be read. This signifies EOF.
    The second parameter here specifies the number of characters +1 that should be read in. In this case 42 means
    that 41 characters shoul be read. This is 40 characters for the map line plus one CR character for the end-of-line
    (EOL) marker.
 */
 while (fgets (oneline, 42, mapfile) != NULL)
 {
  /* Once read into the temporary array called oneline, the line is copied into the correct part of the screen array,
     which is called gamearray. Simply assigning oneline into the arrray doesn't work, the strcpy command has to be used.
  */
  strcpy (gamearray[looper], oneline);
//  mvprintw (looper, 1, "%s", gamearray[looper]);
  printf ("%s", gamearray[looper]);
  looper ++;
  refresh;
 }
 // Close the file once finished with it
 fclose (mapfile);
}
