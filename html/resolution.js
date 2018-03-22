function getResolution()
{
	var objectWidth = document.getElementById("elem").width;
	var objectHeight = document.getElementById("elem").height;

	document.getElementById("container").style.width = screen.width - objectWidth;
	document.getElementById("container").style.height = screen.height - objectHeight;
}