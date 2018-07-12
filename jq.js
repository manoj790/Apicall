$(document).ready(function() {
 
	$('#register').submit(function(e) {
		e.preventDefault();

		var name = $('#name').val();
		var contact = $('#contact').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var resume = $('#resume').val();

		    $(".error").remove();
 
    if (name.length < 1) {
      $('#name').after('<span class="error">This field is required</span>');
  }
 
    if (contact.length < 1) {
      $('#contact').after('<span class="error">This field is required</span>');
 }   

    else {
        var regNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var validNumber =regNumber.test(contact);
        if(!validNumber) {
          $('#contact').after('<span class="error">enter contact number</span>');
        }
    }

    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
 }

    else {
      var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
  }


    if (address.length < 1) {
      $('#address').after('<span class="error">This field is required</span>');
 }

	});
});


   $(document).ready(function () {
          $('#id_radio1').click(function () {
          $('#div2').hide('fast');
          $('#div1').show('fast');
        });
          $('#id_radio2').click(function () {
          $('#div1').hide('fast');
          $('#div2').show('fast');
        });
       });