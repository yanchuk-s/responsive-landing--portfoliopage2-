 // адаптивное меню
$(document).ready(function() {
  $('#menu-trigger').click(function() {
    $('.nav').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.nav').removeAttr('style');
		 }
	});//end resize
});//end ready





//  OPEN AND CLOSE NAVBAR


/* Open when someone clicks on the span element */
function openNav() {
   document.getElementById("myNav").style.height = "100%";
    
    document.getElementById("myBd").style.padding = "5%";

 
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myBd").style.padding = "0";
     
}

function animateImg() {
     document.getElementById("iphone").addClass('animated fadeInDown');
}

$('#iphone').addClass('animated fadeInDown');


