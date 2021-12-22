// JavaScript Document
$( document ).ready(function(){
	
	
	
	 $('.scrollspy').scrollSpy();
	
	  $(".button-collapse").sideNav();
	//$('.dropdown-button').dropdown();
	$('.slider').slider({full_width: true});


//$('.dropdown-button').dropdown({
//      inDuration: 300,
//      outDuration: 225,
//      constrain_width: false, // Does not change width of dropdown to that of the activator
//      hover: true, // Activate on hover
//      gutter: 0, // Spacing from edge
//      belowOrigin: false, // Displays dropdown below the button
//      alignment: 'left' // Displays dropdown with edge aligned to the left of button
//    }
//  );
	 $('.materialboxed').materialbox();
	$('.parallax').parallax();
	
	$('.scrollspy').scrollSpy();
	$('.modal-trigger').leanModal();
	
	$(".dropdown-button").dropdown()//{ hover: false };
	 $('.carousel').carousel();
}); 