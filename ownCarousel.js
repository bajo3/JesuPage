$(function() {
  $('.owl-carousel').owlCarousel({
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      loop: true,
      nav: true,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: {
          0: { items: 1 },
          600: { items: 4 }
      }
  });
});
