$(function(){

	$('.main-slider').slick({
		infinite: false,
		fade: false,
		slidesToShow: 4,
		nextArrow: $('.slider__arrow-next'),
		prevArrow: $('.slider__arrow-prev'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}		

			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}		

			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
				}		

			},
		]			
	});
		
 $('.tabs .tab').click(function(event) {
	  let id = $(this).attr('data-id');
    $('.tabs-content').find('.tab-item').removeClass('active').hide();
    $('.tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active').fadeIn();        
    return false;
	 }); 

 $('.callback-btn').magnificPopup({
 	fixedContentPos: false,
    fixedBgPos: true
 });

 $('.minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
    });

  $('.plus').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

});