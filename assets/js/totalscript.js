$(document).ready(function () {
    //Video section slider here
    $(".st_slider").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: false,
      speed: 300,
      slidesToScroll: 1,
      pauseOnHover: true,
      centerMode: false,
      centerPadding: "0px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "0px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "0px",
            slidesToShow: 2,
            slidesToShow: 1,
          },
        },
      ],
    });
 
  });