
function newDraggable (elementParent, elementId, w, h, t) {
  // Purpose: Simplify adding new draggable div
  //
  // use (general): newDraggable (id_of_container, id_of_new_element, width_of_new_in_px, height_of_new_in_px, some_text_to_start_with)
  // use (example): newDraggable ("container", "mynewthing", 200, 100, "Hello world");
  
  // get a handle to the parent object
  var popsicle = document.getElementById(elementParent);
  // instantiate some objects that will be children
  var newDiv = document.createElement("div");
  var newDiv_inner = document.createElement("div");
  // set the elementId
  newDiv.id=elementId;
  // provide width, height
  newDiv.style.width= w + "px";
  newDiv.style.height=h + "px";
  // set-up the mouse events
  newDiv.onmousedown=function(event) {
    mydragg.startMoving(this, elementParent, event);
  };
  newDiv.onmouseup=function() {
    mydragg.stopMoving(elementParent);
  };
  // provide a bunch of CSS stuff at once; this should NOT be here
  newDiv.style.cssText="position:absolute;background-color:green; -webkit-user-select:none; -moz-user-select:none; -o-user-select:none; -ms-user-select:none; -khtml-user-select:none; user-select:none;";
  // add an inner element, give it an id with _inner attached
  newDiv_inner.id=elementId + "_inner";
  // bulk-set CSS stuff at once; again, should NOT be here, prevents recursion
  newDiv_inner.style.cssText="width:100%;height:100%;padding:10px;background-color:red;";
  setRandomColor(newDiv);
  setRandomColor(newDiv_inner);
  // insert the starting text provided
  newDiv_inner.innerHTML=t;
  // add the new inner div to the new child
  newDiv.appendChild(newDiv_inner);
  // add the new outer div to the parent as child
  popsicle.appendChild(newDiv);
  
  
}

function makeDraggableElementId() {
  // Purpose: make a random string to use as a div id
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(me) {
  $(me).css("background-color", getRandomColor());
}

