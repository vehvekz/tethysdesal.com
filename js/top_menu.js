$(document).ready(function() {
    

	var mBtn = $('.menu_btn').width()
	
	 $('#1').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	
	
	new Waypoint({
  element: document.getElementById('home'),
  handler: function() {
	  	$('.circles_menu a:link, .circles_menu a:visited').css({'color':'#FFF'})
	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#1').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	  $('.top_menu li').removeClass("underline");
  } ,  offset: -100
})

	new Waypoint({
  element: document.getElementById('solution'),
  handler: function() {
	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#9fd573'})
	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#2').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	  	  $('.top_menu li').removeClass("underline");
	   $('#menuSolution').addClass("underline");
  } ,  offset: 200
})

	new Waypoint({
  element: document.getElementById('segments'),
  handler: function() {
	  	  	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#FFF'})
	  	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#3').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	  	  $('.top_menu li').removeClass("underline");
	  $('#menuSegments').addClass("underline");
  } ,  offset: 100
})

	new Waypoint({
  element: document.getElementById('team'),
  handler: function() {
	  	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#9fd573'})
	  	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#4').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	  $('.top_menu li').removeClass("underline");
	  	   $('#menuTeam').addClass("underline");
  } ,  offset: 200
})

	new Waypoint({
  element: document.getElementById('contact'),
  handler: function() {
	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#FFF'})
  	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#5').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	   $('#menuContact').addClass("underline");
  } ,  offset: 200
})


	new Waypoint({
  element: document.getElementById('team'),
  handler: function(direction) {
	  	  if(direction === 'up'){

	  	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#9fd573'})
	  	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#4').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	  	  $('.top_menu li').removeClass("underline");
	  	   $('#menuTeam').addClass("underline");
		  }
  } ,  offset: 'bottom-in-view'
})

	new Waypoint({
  element: document.getElementById('segments'),
  handler: function(direction) {
	  	  	  if(direction === 'up'){
	  	  	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#FFF'})
	  	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#3').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	  	  $('.top_menu li').removeClass("underline");
	  	   $('#menuSegments').addClass("underline");
			  }
  } ,  offset: 'bottom-in-view'
})

	new Waypoint({
  element: document.getElementById('solution'),
  handler: function(direction) {
	  if(direction === 'up'){
	  $('.circles_menu a:link, .circles_menu a:visited').css({'color':'#9fd573'})
	  $('.circles_menu li span').removeClass("fa fa-circle").addClass("fa fa-circle-o");
	  $('#2').removeClass("fa fa-circle-o").addClass("fa fa-circle");
	   $('.top_menu li').removeClass("underline");
	  $('#menuSolution').addClass("underline");
	  }
  } ,  offset: 'bottom-in-view'
})



	

new Waypoint({
  element: document.getElementById('solution'),
  handler: function(direction) {
	  if(direction === 'down'){
	
	
	
    $('.top_header').animate({
		top:0	
	}, 300)}
  }
})

new Waypoint({
  element: document.getElementById('solution'),
  handler: function(direction) {
	  if(direction === 'up'){
		  
		  
	

    $('.top_header').animate({
		top:-100	
	}, 300)}
  }
})



	$('#menu_btn').click(function() {
		$('.mobile_menu').toggleClass('open');
	});

	



});
