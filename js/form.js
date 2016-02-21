/**
* AJAX Form Submit Example with jQuery
*
* (c) Resalat Haque
* http://www.w3bees.com
*
*/

$(document).ready(function() {

	var form = $('#form'); // contact form
	var submit = $('#submit');	// submit button
	var alert = $('.alert'); // alert div for show alert message

	form.validate({
		messages:{
		            firstName:{
		                required: "Enter your first name"
		            },

		            lastName:{
		                required: "Enter your last name"
		            },
		            phone:{
		                required: "Enter your phone number"
		            },
		            email:{
		                required: "Enter your email adress"
		            }
		       }
	}); // Jquery validation

	// form submit event
	form.on('submit', function(e) {
		e.preventDefault(); // prevent default form submit
		// sending ajax request through jQuery
		$.ajax({
			url: '', // form action url
			type: 'POST', // form submit method get/post
			dataType: 'html', // request type html/json/xml
			data: form.serialize(), // serialize form data 
			beforeSend: function() {
				alert.fadeOut();
				submit.html('Sending....'); // change submit button text
			},
			success: function(data) {
				alert.fadeIn(); // fade in response data
				form.trigger('reset'); // reset form
				submit.html('Send Email'); // reset submit button text
			},
			error: function(e) {
				console.log(e)
			}
		});
	});



});