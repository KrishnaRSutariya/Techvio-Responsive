$(document).ready(function () {
  $("#banner").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left icon"></i>',
      '<i class="fa-solid fa-chevron-right icon"></i>',
    ],
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#bannerclient").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left icon"></i>',
      '<i class="fa-solid fa-chevron-right icon"></i>',
    ],
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $("#servicesdetails").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left icon"></i>',
      '<i class="fa-solid fa-chevron-right icon"></i>',
    ],
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#projectd").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#projectd1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Preloader Area
  $(window).on("load", function () {
    $(".preloader").addClass("preloader-deactivate");
  });
  setInterval(() => {
    $(".preloader").addClass("preloader-deactivate");
  }, 500)

  // <!-- Go To Top Script -->

  // Go to Top
  $(function () {
    // Scroll Event
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".go-top").addClass("active");
      if (scrolled < 600) $(".go-top").removeClass("active");
    });
    // Click Event
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
  });

  // Sticky Navbar
  $(function () {
    // Scroll Event
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 150) {
        $("#skicky-header").removeClass("position-absolute");
        $("#skicky-header").addClass("shadow");
        $("#skicky-header").addClass("position-fixed active");
        $("#img-light").addClass("d-none");
        $("#img-dark").removeClass("d-none");
      }
      else {
        if (document.getElementById('skicky-header').classList.contains('position-fixed')) {
          $("#skicky-header").removeClass("position-fixed active")
          $("#skicky-header").removeClass("shadow");
          $("#skicky-header").addClass("position-absolute")
          $("#img-light").removeClass("d-none");
          $("#img-dark").addClass("d-none");
        }
      }
    });
  });
});
