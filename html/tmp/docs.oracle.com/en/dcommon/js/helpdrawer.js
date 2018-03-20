// JavaScript Document



$(document).ready(function() {

	
$(function() {

 if(! window.state){
    //var state = true;
	 window.state = true;
	 };
   //alert(state);
    
                $("#helpbutton").click(function () {
                    if (window.state) {
                        $("#helpdrawer").animate({
                            right: 0
                        }, 400);
					$("#helpdrawercontents").css('display', 'block');
					//$("#helpdrawertab").prop("alt", "Close Help Drawer");
					//$("#helpdrawertab").prop("title", "Close Help Drawer");
					//$("#accessible-helptablink").html('Click here to close the help drawer');
                    } else {
                        $("#helpdrawer").animate({
                            right: -280
                        }, 400);
                	$("#helpdrawercontents").css('display', 'none');
					//$("#helpdrawertab").prop("alt", "Open Help Drawer");
				//$("#helpdrawertab").prop("title", "Open Help Drawer");
					//$("#accessible-helptablink").html('Click here to open the help drawer');
                    }
                    window.state = !state;
                });
	
  });
	

// how about close if target is not helpdrawer?


$(document).mouseup(function (e)
{
    var container = $("#helpdrawer");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        //container.hide();
		//alert(window.state);
		 $( "#helpdrawer" ).animate({right: -280}, 400, "easeOutSine" );
		   window.state = true;
		
    }
});









});// close doc ready



/*$(function() {
    var state = true;
    $( 'html' ).click(function() {
      if ( state ) {
        $( "#helpdrawer" ).animate({
          right: 0
        }, 400, "easeOutSine" );
      } else {
        $( "#helpdrawer" ).animate({
         right: -280
        }, 400, "easeOutSine" );
      }
      state = !state;
    });
  });
		*/	