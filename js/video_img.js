$(document).ready(function() {
	
	
	$('#video_half img').click(function(){
		
		var W = $(this).width();
		var H = $(this).height();
		
		$(this).remove()
				$('.video_replacer').append('<iframe width="'+W+'" height="'+H+'" src="https://www.youtube.com/embed/otKX8q9d9lM?autoplay=1" frameborder="0" allowfullscreen></iframe>')
		
		})
		
	
		
	});
	
	