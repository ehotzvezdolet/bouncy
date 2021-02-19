$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });
    $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });
      $('.price__item-premium').on('click', function(){
        $('.price__item-premium').toggleClass('active');
      });
      $('.price__item-super').on('click', function(){
        $('.price__item-super').toggleClass('active');
      });
      $('.price__item-exclusive').on('click', function(){
        $('.price__item-exclusive').toggleClass('active');
      });




    var mixer = mixitup('.portfolio__inner-items');
});