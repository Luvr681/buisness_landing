$(function() {

	 // Smooth scroll================================
  $("[data-scroll]").on('click', function(event) {
  	event.preventDefault();// Отмена стандартного поведения при клике

  	let elementId = $(this).data('scroll')//Получение элемента с атрибутом data-scroll == нужному
  	let elementOffset = $(elementId).offset().top; //Получение отступа данного элемента от верха

  	$('html, body').animate({
  		scrollTop: elementOffset + 30
  	});
  	nav.removeClass('show')

  });
  let logotype = $('#logo');
  logotype.on('click', () => {
  	$('html, body').animate({
  		scrollTop: 0
  	})
  	nav.removeClass('show')
  })

  // Fixed Header================================
  let header = $('#header');
  let intro = $('#Home');
  let introHeight;//Высота элемента, включая padding
  let scrollPosition = $(window).scrollTop();//Сколько мы проскролили страницу в px

  $(window).on('scroll load resize', () => {

    introHeight = intro.innerHeight();//Высота элемента, включая padding
    scrollPosition = $(this).scrollTop();
    scrollPosition > introHeight ? header.addClass('fixed') : header.removeClass('fixed');

  }) 

})


