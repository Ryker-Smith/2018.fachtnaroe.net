#!/usr/bin/perl -w
use CGI;
my $q = new CGI;
my $text = qq(
screen mode id:i:2
session bpp:i:32
compression:i:1
keyboardhook:i:2
displayconnectionbar:i:1
disable wallpaper:i:1
disable full window drag:i:1
allow desktop composition:i:0
allow font smoothing:i:0
disable menu anims:i:1
disable themes:i:0
disable cursor setting:i:0
bitmapcachepersistenable:i:1
full address:s:%s
audiomode:i:0
redirectprinters:i:1
redirectcomports:i:0
redirectsmartcards:i:1
redirectclipboard:i:1
redirectposdevices:i:0
autoreconnection enabled:i:1
authentication level:i:2
prompt for credentials:i:0
negotiate security layer:i:1
remoteapplicationmode:i:0
alternate shell:s:
shell working directory:s:
gatewayhostname:s:
gatewayusagemethod:i:4
gatewaycredentialssource:i:4
gatewayprofileusagemethod:i:0
promptcredentialonce:i:1
drivestoredirect:s:E:;
use multimon:i:0
audiocapturemode:i:0
videoplaybackmode:i:1
connection type:i:2
redirectdirectx:i:1
use redirection server name:i:0
);


print "Content-Type: application/octet-stream\n";
print "Content-Disposition: attachment; filename=" .  $q->param('servername') . ".rdp\n";
print "\n";


printf $text, $q->param('servername') . "\n";
