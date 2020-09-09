$(document).ready(function() {

	// Маска для формы телефона
	$(".mobile").mask("+7 (999) 999-99-99");


	// Слайдер Главная страница
	$('.promo.slider').slick({
		infinite: true,
		autoplay: true,
		dots: true,
		arrows: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.promo.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-dots li[aria-hidden="false"]').hide();
		$('.slick-dots li[aria-hidden="true"]').show();
	});	
		$('.slick-dots li[aria-hidden="true"]').hide();

	// Слайдер популярные товары
	$('.popular_items.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '228px',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1600,
			settings: {
				centerPadding: '160px',
				arrows: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				centerPadding: '60px',
				arrows: true,
			}
		},
		{
			breakpoint: 980,
			settings: {
				centerPadding: '140px',
				slidesToShow: 1,
				arrows: true,
			}
		},
		{
			breakpoint: 640,
			settings: {
				centerPadding: '25px',
				slidesToShow: 1,
				arrows: false,
			}
		}
		]
	});


	// Открыть форму обратной связи
	$('.mail_btn').click(function(event) {
		event.preventDefault();
		$('.form_wrapper').fadeIn();
		$('.overlay').removeClass('hidden').addClass('z_ind').fadeIn();
		
	});

	$('.overlay').click(function(event) {
		event.preventDefault();
		search_btn_OUT();
		$('.form_wrapper').fadeOut();
		$(this).fadeOut('fast', function(){
			$('.overlay').addClass('hidden').removeClass('z_ind');
		});
	});

	$('.close_btn').click(function(event) {
		event.preventDefault();
		$('.form_wrapper').fadeOut();
		$('.overlay').fadeOut().addClass('hidden').removeClass('z_ind');
	});


	// OPEN Search_btn 
	function search_btn(){
		$('.search_block').fadeToggle();
		$('.overlay').fadeToggle();
		$('.menu_wrapper').toggleClass('open');
		$('.promo_content').toggleClass('open');
		$('.search_btn').toggleClass('i_search_black').toggleClass('i_close_black');
		$('.mail_btn').toggleClass('hidden');
		$('.menu_btn').toggleClass('hidden'); 
	}
	function search_btn_OUT(){
		$('.search_block').fadeOut();
		$('.overlay').fadeOut();
		$('.menu_wrapper').removeClass('open');
		$('.promo_content').removeClass('open');
		$('.search_btn').addClass('i_search_black').removeClass('i_close_black');
		$('.mail_btn').removeClass('hidden');
		$('.menu_btn').removeClass('hidden');
	}

	// OPEN MENU
	function menu_btn(){
		$('.menu').fadeToggle();
		$('.overlay').fadeToggle();
		$('.menu_wrapper').toggleClass('open');
		$('.promo_content').toggleClass('open');
		$('.menu_btn').toggleClass('i_menu').toggleClass('i_close_black');
		$('.mail_btn').toggleClass('hidden');
		$('.search_btn').toggleClass('hidden');
	}
	function menu_btn_OUT(){
		$('.menu').fadeOut();
		$('.overlay').fadeOut();
		$('.menu_wrapper').removeClass('open');
		$('.promo_content').removeClass('open');
		$('.menu_btn').addClass('i_menu').removeClass('i_close_black');
		$('.mail_btn').removeClass('hidden');
		$('.search_btn').removeClass('hidden');
	}

	$(function() {
		$('.search_btn').on('click', search_btn);
		$('.menu_btn').on('click', menu_btn);
	});
	

	$('#agreement').click(function(){
		if ($(this).is(':checked')){
			$('.submit_btn').removeAttr('disabled');
		} else {
			$('.submit_btn').attr('disabled', 'disabled'); 
		}
	});

	const parent = $('.teleport').parent();
	const child = parent.find('.teleport').filter( ':first' );
	const header = $('.header_wrapper');
	// Перенос контента на разрешении меньше 980px
	$(window).on('load resize orientationchange', function () {
		if ($(window).width() >= 963) {
			$('.teleport_wrapper').each(function () {
				if(!$(this).find('div').hasClass('teleport') && $(header).find('div').hasClass('teleport')) {
					$(this).append(child);
					$('div').removeClass('open');
					$('.overlay').fadeOut().addClass('hidden');
					$('.form_wrapper').fadeOut();
					$('.search_block').fadeOut();
					$('.search_btn').removeClass('i_close_black').addClass('i_search_black');
					$('.mail_btn').removeClass('hidden');
					$('.menu_btn').removeClass('hidden');
					$('.search_btn').removeClass('hidden');
					$('.menu').removeAttr('style');
				}
			})
		}
		else if ($(window).width() < 979)  {
			if(!header.find('div').hasClass('teleport')) {
				header.find('.logo').after(child);
			}
			
		}
	});








	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
		$("#form").submit(function () {
			$.ajax({
				type: "POST"
				, url: "mail.php"
				, data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$("#form").trigger("reset");
				$.fancybox.open($("#pop"));
				setTimeout(function () {
					$.fancybox.close();
				}, 1500);
			});
			return false;
		});
	});


});




