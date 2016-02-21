jQuery(document).ready(function ($) {

var slidersNum = $('.slide').length
var counter = parseInt('0')
var currSlide = '#slide0'
var slideSpeed = parseInt('500')

			 // console.log(counter)




for(i = 0; i < slidersNum; i++){
	
	$('.slide:eq('+i+')').attr('id', 'slide'+i);
	
	$('.slider_menu').append('<li class="slider_btn" id=b'+i+'> </li>')
	}
	
$(currSlide).css({'z-index':'2','opacity':'1'});
$('#b0').css({'background-color':'rgba(255,255,255,1'});
	
	
		 function fader(){
			 
			 console.log(counter)
			 
			 currSlide = '#slide'+counter
			 
			$('#slide'+counter).css({'z-index':'1'})
			
			$('.slider_btn').animate({
				'background-color': 'rgba(255,255,255,0)'
			},200)
							
			counter=counter+1;	
			if(counter > (slidersNum-1)){counter = 0}	
			
			$('#slide'+counter).css({'z-index':'2'})
			
			$('#slide'+counter).animate({
			opacity:1
			},slideSpeed,function(){
				$(currSlide).css({opacity:0});
				})
			
			

			
			$('#b'+counter).animate({
			'background-color': 'rgba(255,255,255,1)'
			},200)
	 }
	 
	 	 var timer = window.setInterval(fader, 5000);
		 
		 
		 
		  $('.slider_btn').click(function()
		  {
			var clickCounter = parseInt($(this).attr('id').slice(1), 10);
						 console.log(counter)

			clearInterval(timer);

			currSlide = '#slide'+counter
			$('#slide'+counter).css({'z-index':'1'})
			$('.slider_btn').animate({
			'background-color': 'rgba(255,255,255,0)'},200) 
			
			 counter=clickCounter;
			
			$('#slide'+counter).css({'z-index':'2'})
			
			$('#b'+counter).animate({
			'background-color': 'rgba(255,255,255,1)'
			},200)
			
			$('#slide'+counter).animate({
			opacity:1
			},slideSpeed,function(){
				$(currSlide).css({opacity:0});
				timer = window.setInterval(fader, 5000);
				})
				
				
		  });
	


})