#!/usr/bin/perl
use strict;

use CGI;
use DBI;
use CGI::Carp ("fatalsToBrowser");
# are these used?:
use URI qw();
use URI::QueryParam qw();

print "Content-type: text/html\n\n";
my $cgi = CGI->new;
$cgi->header(-type => "application/json", -charset => "utf-8");
my $showHtml=0;
# $cgi->header(-type => "application/json", -charset => "utf-8");
my ($db, $dbconn, $dbhost, $dbuser, $dbpasswd, $dbh);
dbPrepare();
use constant customer => 'CUSTOMER';
use constant contact => 'CONTACT';
use constant technician => 'TECHNICIAN';
use constant job => 'JOB';
use constant login => 'LOGIN';
use constant debug => 'DEBUG';
use constant POST => 'POST';
use constant PUT => 'PUT';
use constant GET => 'GET';
use constant DELETE => 'DELETE';
use constant LIST => 'LIST';

my @data=$cgi->param;
open FILE, ">> /home/public/pcpitstop.dat";
use DateTime;
my $dt = DateTime->now;
my $time= join ' ', $dt->ymd, $dt->hms;
dbg("\n-----New Query-----" . $time . "\nFrom address: " . $ENV{REMOTE_ADDR} ."\nWith browser: " . $ENV{HTTP_USER_AGENT} . "\nParameters: ");
foreach (@data) {
  print FILE "($_=" . $cgi->param($_) . ") ";
}
print FILE "\n";

my $action=$cgi->param('action'); #$ENV{'REQUEST_METHOD'}; 
my $type=$cgi->param('type');
dbg($action);
dbg( $ENV{'QUERY_STRING'} );

if (uc $type eq customer) {
  customerDetails();
}
elsif (uc $type eq technician) {
  technicianDetails();
}
elsif (uc $type eq job) {
  jobDetails();
}
elsif (uc $type eq contact) {
  contactDetails();
}
elsif (uc $type eq debug) {
  debugScreen();
}
elsif (uc $type eq login) {
  loginCheck();
}
else {
 dbg('type not matched');
}
dbg('-----END-----');
close FILE;

sub technicianDetails {
  my ($q, $result);
  my $name=$cgi->param('Name');
  my $family=$cgi->param('Family');
  my $phone=$cgi->param('Phone');

  if (uc $action eq POST) {
    $q="INSERT INTO technicianDetails (Name, Family, Phone) VALUES (?, ?, ?);";
    my $qh=$dbh->prepare($q);
    $result=$qh->execute($name, $family, $phone);
  }
  elsif (uc $action eq PUT) {
    $q="UPDATE technicianDetails SET Name=?, Family=?, Phone=? WHERE Phone=?;";
    my $qh=$dbh->prepare($q);
    $result=$qh->execute($name, $family, $phone, $phone);
  }
  elsif (uc $action eq GET) {
    $q="SELECT Name, Family, Phone FROM technicianDetails WHERE Phone=?;";
    my $qh=$dbh->prepare($q);
    $qh->execute($phone);
    $result=$qh->fetchrow_hashref();
    my $json=  "{ ";
    foreach (keys %$result) {
      $$result{$_}=deApostrophisise($$result{$_});
      $json .= "'$_' : '" . $$result{$_} . "', ";
    }
    $json =~ s/,\s$//; #remove final comma
    $json .= " }\n";
    print $json;
    print FILE $json;
  }
  elsif (uc $action eq DELETE) {
    $q="DELETE FROM technicianDetails WHERE Phone=?;";
    my $qh=$dbh->prepare($q);
    $result=$qh->execute($phone);
  }
  elsif (uc $action eq LIST) {
    $q="SELECT Name, Family, Phone FROM technicianDetails;";
    my $qh=$dbh->prepare($q);
    $qh->execute();
    my $file;
    if ($showHtml) {
      $file="\n<table><tr>";
			my @fieldNames=listTableFields('technicianDetails');
			foreach (@fieldNames) {
			  $file .= "<td><strong>$_</strong></td>";
			}
			$file .= "</tr>";
    }
    else {
      $file=  "";
    }
    while (my @data=$qh->fetchrow_array()) {
      if ($showHtml) {
				$file .= "<tr>";
      }
      foreach (@data) {
				if ($showHtml) {
					$file .= "<td> $_ </td>" ;
				}
				else {
					$file .= $_ ."::" ;
				}
      }
      if ($showHtml) {
				$file .= "</tr>";
      }
      $file =~ s/::$//; #remove final separator
      $file .= "\n";
    }
    if ($showHtml) {
      $file .= "</table>\n";
    }
    if (!$showHtml) {
			dbg($file);
		}
    print $file;
  }
  else {
  }
}

sub jobDetails {
  my ($q, $result);
  my $jobNumber=$cgi->param('jobNumber');
  my $technicianNumber=$cgi->param('technicianNumber');
  my $jobDetails=$cgi->param('jobDetails');
  my $jobDone=$cgi->param('jobDone');
  my $jobReporter=$cgi->param('jobReporter');
  my $jobRoomNumber=$cgi->param('jobRoomNumber');
  my $jobDateReported=$cgi->param('jobDateReported');
  my $jobDateResolved=$cgi->param('jobDateResolved');
  my $jobTechnicianComments=$cgi->param('jobTechnicianComments');
  
  if (uc $action eq POST) {
    $q="INSERT INTO jobDetails (jobRoomNumber, technicianNumber, jobDetails, jobDone, jobReporter, jobNumber, jobTechnicianComments, jobDateReported, JobDateResolved) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
    my $qh=$dbh->prepare($q);
    $result=$qh->execute($jobRoomNumber, $technicianNumber, $jobDetails, $jobDone, $jobReporter, $jobNumber, $jobTechnicianComments, $jobDateReported, $jobDateResolved);
    my $newJobNumber=$dbh->{mysql_insertid};
		dbg("Created jobDetails with ID: $newJobNumber");
		print "{ 'jobNumber' : '$newJobNumber' }";
  }
  elsif (uc $action eq PUT) {
    $q="UPDATE jobDetails SET jobRoomNumber=?, technicianNumber=?, jobDetails=?, jobDone=?, jobReporter=?, jobTechnicianComments=?, jobDateReported=?, jobDateResolved=? WHERE jobNumber=?;";
    my $qh=$dbh->prepare($q);
    $result=$qh->execute($jobRoomNumber, $technicianNumber, $jobDetails, $jobDone, $jobReporter, $jobNumber, $jobTechnicianComments, $jobDateReported, $jobDateResolved);
  }
  elsif (uc $action eq GET) {
    $q="SELECT jobRoomNumber, technicianNumber, jobDetails, jobDone, jobReporter, jobNumber, jobTechnicianComments, jobDateReported, jobDateResolved FROM jobDetails WHERE jobNumber=?;";
    my $qh=$dbh->prepare($q);
    $qh->execute($jobNumber);
    $result=$qh->fetchrow_hashref();
    
    my $json=  "{ ";
    foreach (keys %$result) {
      $$result{$_} = deApostrophisise($$result{$_});
      $json .= "'$_' : '" . $$result{$_} . "', ";
    }
    $json =~ s/,\s$//; #remove final comma
    $json .= " }\n";
    print $json;
    print FILE $json;
  }
  elsif (uc $action eq DELETE) {
    $q="DELETE FROM jobDetails WHERE jobNumber=?;";
    my $qh=$dbh->prepare($q);
    $result=$qh->execute($jobNumber);
  }
  elsif (uc $action eq LIST) {
    $q="SELECT jobNumber, jobRoomNumber, technicianNumber, jobDetails, jobDone, jobReporter, jobTechnicianComments, jobDateReported, jobDateResolved FROM jobDetails;";
    my $qh=$dbh->prepare($q);
    $qh->execute();
    my $file;
    if ($showHtml) {
      $file="\n<table><tr>";
			my @fieldNames=listTableFields('jobDetails');
			foreach (@fieldNames) {
			  $file .= "<td><strong>$_</strong></td>";
			}
			$file .= "</tr>";
    }
    else {
      $file=  "";
    }
    while (my @data=$qh->fetchrow_array()) {
      foreach (@data) {
			if ($showHtml) {
				$file .= "<td> $_ </td>" ;
			}
			else {
				$file .= $_ ."::" ;
			}
      }
			if ($showHtml) {
				$file .= "</tr>";
      }
      $file =~ s/::$//; #remove final separator
      $file .= "\n";
			
    }
		if ($showHtml) {
				$file .= "</table>\n";
		}
    if (!$showHtml) {
			dbg($file);
		}
    print $file;
  }
  else {
  }
}

sub debugScreen {
  my ($q, $result);
  print <<__CSS1;
  <style> 
  table, td
  {
    border: 1px solid black;
    border-collapse: collapse;
  }
  table {
    width: 40%;
  }
  hr {
    border: 1px dotted black;
    width: 50%;
    float: left;
  }
  </style>
  <pre>
__CSS1
  $showHtml=1;
  $action=LIST;
  print "<pre><big><strong>Technicians</strong></big></pre><hr>";
  technicianDetails();
  #print "<pre><big><strong>Customers</strong></big></pre><hr>";
  #customerDetails();
  print "<pre><big><strong>Jobs</strong></big></pre><hr>";
  jobDetails();
  #print "<pre><big><strong>Contacts</strong></big> (ALT assignment)</pre><hr>";
  #contactDetails();
	dumpAccessRequests();
  print <<__CSS2;
  </pre>
__CSS2
}

sub dumpAccessRequests {
	my @contents;
	# close output mode handle
  close FILE;
	# open input mode handle
	open FILE, "< /home/public/datafile.dat";
	@contents=<FILE>;
	# close output mode and ...
	close FILE;
	# ... leave ready for outside of subroutine.
	open FILE, ">> /home/public/datafile.dat";
	@contents = reverse @contents;
	print "<pre><big><strong>Dump of access requests from debug file</strong>&nbsp;(reverse ordered)</big></pre><hr>";
	print "\n<table>";
	print "<tr><td><strong>Line count</strong></td><td><strong>Line content</strong></td></tr>";
	my $c=scalar @contents;
	foreach (@contents) {
		$c--;
	  print "<tr><td>$c</td><td>$_</td></tr>";
	}
	print "</table>";
}

sub dbPrepare {
  $db="pcpitstop";
  $dbhost="127.0.0.1";
  $dbuser="shroudycloudy";
  $dbpasswd="cloudymcshroudy";
  $dbconn="dbi:mysql:$db;$dbhost";
  $dbh = DBI->connect($dbconn, $dbuser, $dbpasswd);
}

sub listTableFields {
# Purpose: get list of fields in table
# Expects: table name
# Returns: array with field names
  my @fieldNames=();
  my $table=shift;
  my $query = "DESCRIBE $table;";
  my $qh = $dbh->prepare($query); # prepare select query
  $qh->execute(); # select now
  while (my @one= $qh->fetchrow()) {
    push @fieldNames, $one[0];
  }
  return @fieldNames;
}

sub dbg {
  print FILE $_[0] . "\n";
}

sub deApostrophisise {
  my $returnValue= $_[0];
  $returnValue =~ s/'/\\'/g;
  return $returnValue;
}

sub loginCheck {
	my $userPhone = $cgi->param('userPhone');
	my $userPass = $cgi->param('userPass');
	my $query="SELECT userPass from userDetails WHERE userPhone = ?";
	my $qh = $dbh->prepare($query); # prepare select query
	$qh->execute($userPhone); # select now
	my $pass=$qh->fetchrow();
	if (($pass eq $userPass) && ($userPhone != '') && ($userPass ne '')){
		print "PassOK";
		# dbg("user=$userPhone, pass=$userPass, savedPass=$pass, response=OK");
	}
	else {
		print "PasswordError";
		# dbg("user=$userPhone, pass=$userPass, savedPass=$pass, response=Error");
	}
}


