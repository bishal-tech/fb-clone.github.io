$(document).ready(function () {
  /// story section slider
  $(".st_slider").slick({
    infinite: false,
    autoplay: false,
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
