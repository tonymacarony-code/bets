$(function () {
	$('.box__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product_content').find('.tab-item').removeClass('active-tab').hide();
		$('.box__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});
});
