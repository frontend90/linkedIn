/*********  burger ************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let logo__header = document.querySelector('.logo__header');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  logo__header.classList.toggle('active');
});

var burger_active = $('.burger.active');
burger_active.click(function () {
  $('.logo__header').removeClass('active');
});

$('.main-menu__link').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});

/*************       about  slick       ************/
/*$('.about__slider').slick({
  prevArrow: $('.about__btn-left'),
  nextArrow: $('.about__btn-right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 2000
});*/

/***********  input search    *******************/
document.addEventListener("DOMContentLoaded", function () {
  tail.select(".select", {
    searchFocus: false
  });
});

/*****************   изменение html       *****************************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenu = $('.main-menu');/* куда закинуть блок */
  var headerOther = $('.other');/* блок, который закинуть */
  var headerSearch = $('.search');/* блок, который закинуть */
  var headerUser = $('.user-info');

  if (w > 1436) {
    headerOther.click(function () {
      headerSearch.css('border-right', 'none');
      headerUser.css('display', 'none');
      $('.other-modal').show(500);
    });

    $('.other-modal__close').click(function () {
      $('.other-modal').hide(300);
      headerSearch.css('border-right', '1px solid #F4F4F4');
      headerUser.css('display', 'grid');
    });
  }

  if (w < 1436) {
    headerOther.appendTo(headerMenu);
    headerOther.click(function () {
      $('.other-modal').show(500);
    });

    $('.other-modal__close').click(function () {
      $('.other-modal').hide(300);
    });

  } else {
    headerOther.appendTo($('.nav__wrap'));
  }

  if (w < 881) {
    headerSearch.appendTo(headerMenu);
  } else {
    $('.menu').after($('.search'));
  }

  if (w < 556) {
    headerUser.appendTo(headerMenu);
  } else {
    headerUser.appendTo($('.nav__wrap'));
  }

}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/***********   active menu по click   **************/
$(function () {
  $('.main-menu__link').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).addClass('active');
    }
    else {
      $(this).removeClass('active');
    }
  });
});

/*************   jquery-ui (Language) */
$(function () {
  $(".footer__lang-select").selectmenu();
});

/*************** jquery ui (search) **********/
$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $(".search__input").autocomplete({
    source: availableTags
  });
});

/***********   active menu по click   **************/
$('.mainPage__nav-btn').click(function () {
  $(this).toggleClass("active");
  $(".mainPage__nav-btn").not(this).removeClass("active");
});

/*************   jquery-ui (feedSort) ***************/
$(function () {
  $(".feedSort__select").selectmenu();
});

/***************   feedComment    ****************/
$('.feedComment__footer-link_like').click(function () {
  $(this).addClass('active');
});

$('.feedComment__footer-link_comment').click(function () {
  $(this).addClass('active');
});

/***************   networkNavbar__main    ****************/
$('.networkNavbar__main-item').click(function () {
  $(this).addClass("active");
  $(".networkNavbar__main-item").not(this).removeClass("active");
});

/***************   jobsSearches    ****************/
$('.jobsSearches__item-img').click(function () {
  $(this).toggleClass("active");
});

/***************   chatNavbar__item    ****************/
$(".chatNavbar__item").click(function () {

  var key = $(this).data('id');
  var Item = $('[data-id=' + key + ']');

  Item.addClass('active').siblings().removeClass('active');

});

/***************   navbar__notices-item    ****************/
$('.navbar__notices-item').click(function () {
  $(this).addClass("active");
  $(".navbar__notices-item").not(this).removeClass("active");
});