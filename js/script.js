//  Portfolio

$(document).ready(function() {
    $('.portfolio__btn[filter]').click(function() {
        if($(this).attr('filter') == 'all') {
            if(!$(this).hasClass('active')) {
                $('.portfolio__btn').removeClass('active');
                $(this).addClass('active');
                $('.portfolio__filter > div').show(300);
            }
        } else {
            if(!$(this).hasClass('active')) {
                $('.portfolio__btn').removeClass('active');
                $(this).addClass('active');
                let filter = $(this).attr('filter');
                $('.portfolio__filter > div').hide(300);
                $('.portfolio__filter > div[filter='+filter+']').show(300);
            }
        }
    })
});

// Team slider

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
                dots: true,
            }
          }
    ]
  });
