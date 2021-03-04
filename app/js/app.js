$(function () {
	$('.box__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product_content').find('.tab-item').removeClass('active-tab').hide();
		$('.box__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$(document).ready(function () {
		$('.menu-burger__header').click(function () {
			$('.menu-burger__header').toggleClass('open-menu');
			$('.menu__list').toggleClass('open-menu');
		});
	});
	$(document).ready(function () {
		$('.search__icon').click(function () {
			$('.search__icon').toggleClass('open-search');
			$('.search__input').toggleClass('open-search');
		});
	});


});
