$(".inputText").each(function(){
	$(this).addClass('valid')
	if($(this).val() != ""){
		$(this).addClass('float')
	}else{
		$(this).removeClass('float')
	}

	$(this).on('input', function(){
		if($(this).prop('required') && $(this).val() == ""){
			$(this).addClass('invalid')
		}else{
			$(this).removeClass('invalid')
		}

		if($(this).val() != ""){
			$(this).addClass('float')
		}else{
			$(this).removeClass('float')
		}
	})
})

$('form').each(function(){
	$(this).on('reset', function(){
		$(this).find('.inputText').removeClass('float')
	})
});

$("#mobileNavToggle").click(function(event){
	event.preventDefault();

	$("body").toggleClass("showMobileNav");
});