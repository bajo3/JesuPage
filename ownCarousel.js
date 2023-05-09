$(function() {
  $('.owl-carousel-4').owlCarousel({
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      loop: true,
      nav: false,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: {
          0: { items: 1 },
          600: { items: 4 }
      }
  });

  $('.owl-carousel-3').owlCarousel({
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,  
      autoplayHoverPause: true,
      loop: true,
      nav: false,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: {
          0: { items: 1 },
          600: { items: 3 }
      }
  });
});
