
function switchContent (divId, bigLittle) {
  // Purpose: proof-of-concept for switching of div content concept; routine may be called from any event
  // divId is if Id of div
  // bigLittle = 1 (big) or 0 (little)
  newContent={
    'earth_little': '<img src="">',
    'earth_big': 'No content yet for earth',
    'mars_little' : '<img src="">',
    'mars_big' : 'No content yet for mars'
  };
  if (bigLittle == 1) {
    divId .= '_big';
  }
  else {
    divId .= '_little';
  }
  document.getElementById(divID).innerHTML=newContent[divId];
}   

