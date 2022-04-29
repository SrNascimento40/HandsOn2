$(document).ready(() =>{
    $('.carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      });
})