$(document).on("scroll", function () {

	if ($(this).scrollTop() > 280) {
		$(".description h3").css({
			"left": "50%"
		})
	}
})

$(".service h2").on("click", function () {
	$(this).next().slideToggle(500);
})


$(".start").on("click", function () {
	$("body, html").animate({
		scrollTop: $("header").offset().top
	}, 500)
})

$(".about_us").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".description").offset().top - 80
	}, 500)
})

$(".service_menu").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".service").offset().top - 80
	}, 500)
})

$(".contact").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".addres").offset().top - 80
	}, 500)
})

$(".fa-bars").on("click", function () {
	$(this).css({
		'transform': 'rotate(180deg) scale(0)',
		'opacity': .5
	});
	$(".fa-window-close").css({
		'display': 'block',
		'transform': 'rotate(180deg) scale(1)',
		'opacity': 1
	});
	$(".menu").css({
		"display": "flex"
	});
	$("header h3").css({
		'opacity': 0
	})
})


$(".fa-window-close").on("click", function () {
	$(this).css({
		'transform': 'rotate(180deg) scale(0)',
		'opacity': .5
	});
	$(".fa-bars").css({
		'transform': 'rotate(180deg) scale(1)',
		'opacity': 1
	});
	$(".menu").css({
		"display": "none"
	});
	$("header h3").css({
		'opacity': 1
	})
})
