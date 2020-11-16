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