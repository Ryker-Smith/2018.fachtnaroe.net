

var mydragg = function(){
                return {
                  
                  startMoving : function(divid,container,evt){
                      console.log(container);
//                       divid.style.background="red";
                        evt = evt || window.event;
                        var posX = evt.clientX,
                            posY = evt.clientY,
                        divTop = divid.style.top, //document.getElementById(container).style.top,
                        divLeft = divid.style.left, //document.getElementById(container).style.left,
                        eWi = parseInt(document.getElementById(container).style.width),
                        eHe = parseInt(document.getElementById(container).style.height),
                        cWi = parseInt(divid.style.width),
                        cHe = parseInt(divid.style.height);
console.log("A ",posX,posY);

                        document.getElementById(container).style.cursor='move';
                        divTop = divTop.replace('px','');
                        divLeft = divLeft.replace('px','');
                        var diffX = posX - divLeft,
                            diffY = posY - divTop;
console.log("D ",diffX,diffY);                            
                        document.onmousemove = function(evt){
                            evt = evt || window.event;
                            var posX = evt.clientX,
                                posY = evt.clientY,
                                aX = posX - diffX,
                                aY = posY - diffY;
console.log("C ",posX,posY);
                                if (aX < 0) aX = 0; 
                                if (aY < 0) aY = 0; 
                                //if (aX + eWi > cWi) aX = cWi - eWi;
                                //if (aY + eHe > cHe) aY = cHe -eHe;
console.log("E ",aX,aY);
                            mydragg.move(divid,posX,posY);
                        }
                    },
                    
                  move : function(divid,xpos,ypos){
console.log("B ",xpos, ypos);
                        divid.style.left = xpos + 'px';
                        divid.style.top = ypos + 'px';
                    },
                    

                    
                  stopMoving : function(container){
                        var a = document.createElement('script');
                        document.getElementById(container).style.cursor='default';
                        document.onmousemove = function(){}
                    },
                }
            }();

function newDraggable (elementParent, elementId, w, h, im) {
  // Purpose: Simplify adding new draggable div
  //
  // use (general): newDraggable (id_of_container, id_of_new_element, width_of_new_in_px, height_of_new_in_px, image_name)
  // use (example): newDraggable ("container", "mynewthing", 200, 100, "image_name.jpg");
  
  // get a handle to the parent object

  var popsicle = document.getElementById(elementParent);
  // instantiate some objects that will be children
  var newDiv = document.createElement("div");
  var newDiv_inner = document.createElement("img");
  // set the elementId
  newDiv.id=elementId;
 
  
  // provide width, height
  newDiv.style.width =w + "px";
  newDiv.style.height=h + "px";
  //location
//   newDiv.style.x=x;
//   newDiv.style.y=y;
//   newDiv.style.position="absolute";
  // set-up the mouse events
  // onmousedown='mydragg.startMoving(this,"container",event);' onmouseup='mydragg.stopMoving("container");' style="width: 100px;height: 100px; background-color: transparent;"
  newDiv.onmousedown=function(event) {
    mydragg.startMoving(this, elementParent, event);
  };
  newDiv.onmouseup=function() {
    mydragg.stopMoving(elementParent);
  };
//   newDiv.dragend=function() {
//     mydragg.stopMoving(elementParent);
//   };
  // provide a bunch of CSS stuff at once; this should NOT be here
  newDiv.style.cssText=" background-color:transparent; -webkit-user-select:none; -moz-user-select:none; -o-user-select:none; -ms-user-select:none; -khtml-user-select:none; user-select:none; ";
  // add an inner element, give it an id with _inner attached
  newDiv_inner.id=elementId + "_inner";
  // bulk-set CSS stuff at once; again, should NOT be here, prevents recursion
  newDiv_inner.style.cssText="width:" + w + "px;height:" + h + "px;background-color:transparent;";
//   setRandomColor(newDiv);
//   setRandomColor(newDiv_inner);
  // insert the starting text provided
  if (im != null) {
    newDiv_inner.src=im;
  }
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

