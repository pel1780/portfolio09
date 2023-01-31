$(function () {
    $('.topBanner .inner button').on('click', function () {
        $('.topBanner').addClass('on');
    });
    // banner

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct >= 100) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });
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

    $('.salon_left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.salon_right_slide',
    });

    $('.salon_right_slide').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.salon_left_slide',
    });

    $('.mainSalon .salon_slide_case .slide_arrows .prev').on('click', function () {
        $('.salon_left_slide').slick('slickPrev');
    });
    $('.mainSalon .salon_slide_case .slide_arrows .next').on('click', function () {
        $('.salon_left_slide').slick('slickNext');
    });

    ///////////// main script //////////////

    $('.coll_slide').slick({
        arrows: false,
        fade: true,
    });

    $('.coll_slide').on('wheel', function (e) {
        if (e.originalEvent.deltaY < 0) {
            $('.coll_slide').slick('slickPrev');
        } else {
            $('.coll_slide').slick('slickNext');
        }
    });

    $('.coll_slide').on('init afterChange', function (e, s, c) {
        $('.num strong').text(c ? ('0' + (c + 1)) : ('0' + 1));
        $('.num span').text(('0' + s.slideCount));
    })
});