$(function () {
    $('.topBanner .inner button').on('click', function () {
        $('.topBanner').addClass('on');
    })
    // banner

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 100) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
    // header

    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainVisual .slide_dots li').on('click', function () {
        var slideListNum = $(this).index();
        $('.mainSlide').slick('slickGoTo', slideListNum);
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.mainVisual .slide_dots li').eq(c).addClass('on').siblings().removeClass('on');
    });
    //main visual  main slide

    $('.salon_left_slide ul').slick({
        arrows: true,
        fade: true,
        asNavFor: '.salon_right_slide ul',
    });

    $('.salon_right_slide ul').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.salon_left_slide ul',
        initialSlide: 1,
    });

});