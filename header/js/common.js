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

/* Adaptive menu */

    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.mob-wrap').toggleClass('menu_state_open');
        });
      });
    })(jQuery);

/* Input calendar */

	$("#datetime1").focus( function() {
	    $(this).attr({type: 'datetime-local'});
	});
	
});