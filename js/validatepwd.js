$(document).ready(function() {

	$('#pass2').keyup(function() {

		var pass1 = $('#pwd').val();
		var pass2 = $('#pwd2').val();
        
		if ( pass1 == pass2 ) {
			$('#error2').text("Coinciden").css("color", "black");
		} else {
			$('#error2').text("No coinciden").css("color", "red");
		}

	});

});