/**
 * Template Name: Rapid - v2.0.0
 * Template URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $(".main-nav a, .mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            top_space = top_space - 40;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".main-nav, .mobile-nav").length) {
          $(".main-nav .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".main-nav, .mobile-nav");
  var main_nav_height = $("#header").outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
    });
  });

  // jQuery counterUp (used in Why Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Open popup-container
  $(".box").click(function () {
    if (!(event.target.className == "githubLink" || event.target.className == "techStack")) {
      let currentPopup = this.className.split(" ")[1].split("popup")[1];
      $("#popup" + currentPopup).addClass("open-popup");
    }
  });

  // Close popup-container
  $(".close").click(function () {
    $(".open-popup").removeClass("open-popup");
  });

  //set all techStacks clickable
  $('.techStack').css({ 'cursor': 'pointer' });

  //Filter cards by techstack
  $(".techStack").click(function () {
    //close all open popups - for techStack inside popups
    $(".open-popup").removeClass("open-popup");
    var value = $(this).text().toLowerCase();
    $(".box").parent().filter(function () {
      var isSameTechStack = false;
      $(this).find(".techStack").each(function () {
        if ($(this).text().toLowerCase() == value) {
          isSameTechStack = true;
        }
      });
      $(this).toggle(isSameTechStack);
    });
  });

  $(".popup-container").click(function () {
    if ($(event.target).hasClass("open-popup")) {
      $("#" + this.id).removeClass("open-popup");
    }
  });

  //Search Bar on Webinar
  $(document).ready(function () {
    $("#txtSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".col-sm-10")
          .parent()
          .filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          });
    });
  });

  // Filter cards by search input
  $(document).ready(function () {
    $("#project-search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".box")
        .parent()
        .filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
  });
})(jQuery);
// News letter Form
// use email
