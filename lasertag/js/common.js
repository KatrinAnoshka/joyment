$(document).ready(function() {

/* Select */
	$('.select').on('click',function(){
		$(this).parent().find('.options').fadeIn('fast');
	});
	$('.options').on('mouseleave',function(){
		$(this).fadeOut('fast');
	});
	$('.pseudo-select').on('mouseleave',function(){
		$(this).find('.options').fadeOut('fast');
	});
	$('.options > div').on('click',function(){
		//if ($(this).attr('value')) {
			$(this).closest('.pseudo-select').find('.select').html($(this).text());
			$(this).closest('.pseudo-select').find('input').attr('value', $(this).attr('value'));
		//}
		$.each($(this).parent().children('div.check'), function(){
			$(this).removeClass('check');
		});
		$(this).addClass('check');
		$(this).parent().fadeOut('fast');
	});

/* Slider-main */
	
	$('.carousel').carousel({
      interval: 6000
    })

   /************* Всплывающая форма *************/

	$(".booked").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});
});