$(".input-field input").each(function () {
	$(this).addClass('valid')
	if ($(this).val() != "") {
		$(this).addClass('float')
	} else {
		$(this).removeClass('float')
	}

	$(this).on('input', function () {
		if ($(this).prop('required') && $(this).val() == "") {
			$(this).addClass('invalid')
		} else {
			$(this).removeClass('invalid')
		}

		if ($(this).val() != "") {
			$(this).addClass('float')
		} else {
			$(this).removeClass('float')
		}
	})
})

$('form').each(function () {
	$(this).on('reset', function () {
		$(this).find('.inputText').removeClass('float')
	})
});

$(".card").each(function () {
	if ($(this).has(".footer")) {
		var iHeight = 0;
		$(this).children().each(function () {
			if ($(this).hasClass("footer")) {
				iHeight += $(this).height();
			}
		})
		$(this).css("margin-bottom", iHeight);
	}
})

$(".progress").each(function () {
	$(this).children().each(function () {
		if ($(this).hasClass("bar")) {
			$(this).css("width", $(this).attr("data-percent") + "%");
		}
	})
})