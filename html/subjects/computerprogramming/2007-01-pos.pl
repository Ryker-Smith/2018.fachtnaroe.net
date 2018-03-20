#!/usr/bin/perl
# Sample program as a solution to assignment #1, 2007: POS application written in Perl.
# Filename: pos.pl	Author: Fachtna Roe
# Purpose: To emulate the functions of a cash register.
# Date: 200702XX
#
  $filename = "barcodes.dat";
  $special_character = ":";
  $owner="Shelbys Super Market";
  $terminate = 0;
  $barcode_length = 13;
  $columnW = 25;
  $bar = "--------------------------------";

  # Read product database from disk
  print "\nOpening database...";
  open (DATABASE, "< $filename");
  @all_records = <DATABASE>;
  close (DATABASE);
  $rec_count = 0;

  foreach $record (@all_records)
  {
   ($price[$rec_count], $barcode[$rec_count], $description[$rec_count]) = split (/$special_character/,$record);
   chop $description[$rec_count];
   # This line is for debugging
   #   print "$barcode[$rec_count] => $price[$rec_count] => $discription[$rec_count]";
   $rec_count++;
  }
  print "...read $rec_count records. Database primed & ready\n\n";

  # Print a header section
  # Force first input to be valid
  $valid = 0;
  while (!$valid)
  {
    print "$owner.\nPress N to start a sale or X to close the register ==> ";
    $option = <STDIN>;
    chop $option;
    $valid = ( ($option eq 'n') || ($option eq 'N') || ($option eq 'x') || ($option eq 'X') );
    if (!$valid)
    {
      print "Please make a valid entry.\n";
    }
  }
  if ( ($option eq 'x') || ($option eq 'X') )
  {
    $terminate = 1;
  }
  while ($terminate == 0)
  {
    print "New Sale: Enter barcodes or E to end the current sale or X to close the register.\n";
    print "$owner\n";
    $sale = 0;
    $sale_total = 0;
    $receipt_length = 0;
    @receipt = ""; # Blank the whole receipt array
    while ($sale == 0)
    {
      print "==> ";
      $product = <STDIN>;
      chop $product;
      if ( ($product eq "x") || ($product eq "X") )
      {
        # End of POS sequence
        $terminate = 1;
        $sale = 1;
      } # exit POS
      elsif  ( ($product eq "e") || ($product eq "E") )
      {
        # End of sale sequence
        $sale = 1;
        if ($receipt_length > 0)
        {
          print "\n$bar\n$owner\n";
          foreach $item (@receipt)
          {
            ($d, $p) = split(/$special_character/,$item);
            print "$d";
            $s=1;
            while ($s <= ($columnW - length $d) )
            {
              print " ";
              $s++;
            }
            printf "%7.2f\n", $p;
          }
          $s=1;
          printf "TOTAL: %25.2f\n$bar\n\n", $sale_total;
         }
      } # exit sale
      elsif ( ($product eq "v") || ($product eq "V") )
      {
        if ($receipt_length > 0)
        {
          print "$description[$counter-1]";
          printf " -%6.2f\n", $price[$counter-1];
          $sale_total = $sale_total - $price[$counter-1];
          pop @receipt; # 'pop' the last element of the array into, well, space!
          $receipt_length--;
        }
      } # Void last sale
      elsif ( (length $product) == ($barcode_length) )
      {
        $counter = 0; # Start searching at 0
        $code_found = 0; # Semaphore for a found code
        while ( ($counter <= $rec_count) && ($code_found == 0) )
        {
          if ( $product eq $barcode[$counter] )
          {
            print "\n$description[$counter]\t";
            printf "%7.2f\n", $price[$counter];
            $sale_total = $sale_total + $price[$counter];
            $code_found = 1;
            $receipt[$receipt_length] = $description[$counter].":".$price[$counter];
            $receipt_length++;
          }
          $counter++;
        }
        if ($code_found == 0)
        {
          print "UNKNOWN CODE: Product Free\n";
        }
      } # barcode processing
    } # terminate sale
    # Resume sales or exit?
    if (!$terminate) 
    {
      $valid = 0;
      while (!$valid)
      {
        print "$owner.\nPress N to start a sale or X to close the register ==> ";
        $option = <STDIN>;
        chop $option;
        $valid = ( ($option eq 'n') || ($option eq 'N') || ($option eq 'x') || ($option eq 'X') );
        if (!$valid)
        {
          print "Please make a valid entry.\n";
        }
      }
      if ( ($option eq 'x') || ($option eq 'X') )
      {
        $terminate = 1;
      }
    } # !$terminate
  } # terminate main POS loop
