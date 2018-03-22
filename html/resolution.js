var myObject = document.getElementById("elem");

var objectWidth = myObject.width;
var objectHeight = myObject.height;

function getResolution()
{
	document.getElementById("container").style.width = screen.width - objectWidth;
	document.getElementById("container").style.height = screen.height - objectHeight;
}