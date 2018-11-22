$(document).ready(function () {
	Waves.attach('button');
	Waves.attach('.btn');
	Waves.attach('.nav-link');
	Waves.init();

	$('.form-control').focus(function () {
		$(this).parent().addClass('focus');
	}).blur(function () {
		$(this).parent().removeClass('focus');
	});
});

$(document).on('show.bs.modal', '.modal', function () {
	var zIndex = 1040 + (10 * $('.modal:visible').length);
	$(this).css('z-index', zIndex);
	setTimeout(function() {
		$('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
	}, 0);
});

$(document).on('hidden.bs.modal', '.modal', function () {
	$('.modal:visible').length && $(document.body).addClass('modal-open');
});