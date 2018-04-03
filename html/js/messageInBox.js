function messageInBox (displayDiv, theMessage) {
    /* Purpose: 
              
    */
    myDiv=document.createElement('div');
    myDiv.id=displayDiv;
    myDiv.innerHTML='<span id="' + displayDiv + '">' + theMessage + '</span>';
    return myDiv;
}
