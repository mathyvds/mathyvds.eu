$(window).load(function() {
$(document).ready(function () {
    $('#nav').affix({
    	offset: {
        	top: $('header').height()
    	}
	});	


$('#contact-form').validate({
        rules: {
            inputname: {
                minlength: 2,
                required: true
            },
            inputemail: {
                required: true,
                email: true
            },
            inputtext: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        /*success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.form-group').removeClass('error').addClass('success');
        },*/
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"contact.php",
                success: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#success').fadeIn();
                    });
                    document.getElementById("send").disabled=true;
                },
                error: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
});