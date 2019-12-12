window.onload = function () {
  let links = document.querySelectorAll('[href^="#"]');
  const SPEED = 1;
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      let coord_win_y = window.pageYOffset;
      let hash = this.href.replace(/[^#]*(.*)/, '$1');
      coord_regard = document.querySelector(hash).getBoundingClientRect().top, start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = (coord_regard < 0 ? Math.max(coord_win_y - progress / SPEED, coord_win_y + coord_regard) : Math.min(coord_win_y + progress / SPEED, coord_win_y + coord_regard));
        window.scrollTo(0, r);
        if (r != coord_win_y + coord_regard) { requestAnimationFrame(step) } else { location.hash = hash }
      }
      return false;
    }
  };









  document.getElementById("container").onmousemove = function (e) {
    obj = document.getElementById("darkness");
    obj.style.top = e.pageY - ($(obj).height() / 2) + "px";
    obj.style.left = e.pageX - ($(obj).width() / 2) - ($(body).width() / 4) + "px";
  };









  var isScrolling = false;
  window.addEventListener("scroll", throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function () {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener("DOMContentLoaded", scrolling, false);

  var content_text = document.querySelectorAll("#right_sector h3");
  var content_head = document.querySelectorAll("#right_sector h2");
  var graph_elem = document.querySelectorAll("#skills_graph img");
  var graph_elem_example = document.querySelectorAll('#carousel');
  var footer_elem = document.querySelectorAll('footer > img');

  function scrolling(e) {
    start_animation(content_text);
    start_animation(content_head);
    start_animation(graph_elem);
    start_animation_graph(graph_elem_example);
    start_animation(footer_elem);
  }

  function start_animation(listItem) {
    for (var i = 0; i < listItem.length; i++) {
      if (isPartiallyVisible(listItem[i])) {
        listItem[i].classList.add("active");
      } else {
        listItem[i].classList.remove("active");
      }
    }
  }

  function start_animation_graph(listItem) {
    for (var i = 0; i < listItem.length; i++) {
      if (isPartiallyVisibleGraph(listItem[i])) {
        listItem[i].classList.add("active");
      } else {
        listItem[i].classList.remove("active");
      }
    }
  }

  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
  }

  function isPartiallyVisibleGraph(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return ((top + height + 75 >= 0) && (height + window.innerHeight >= bottom));
  }









  $(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() > $("#about_").position().top) {
      $('body').css('background', $("#about_").attr("data-color"))
    };
    if ($(document).scrollTop() >= $("#experience_").position().top) {
      $('body').css('background', $("#experience_").attr("data-color"));
    };
    if ($(document).scrollTop() > $("#portfolio_").position().top) {
      $('body').css('background', $("#portfolio_").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#skills_").position().top) {
      $('body').css('background', $("#skills_").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#awards_").position().top) {
      $('body').css('background', $("#awards_").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#end_").position().top - 100) {
      window.scrollTo(0, 0);
    };
  });









};









var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}









function change_logo_over() {
  block_avatar = document.getElementById('block_avatar')
  block_avatar.querySelector('#block_avatar > img').style.width = '55%';
  block_avatar.querySelector('#block_avatar > img').style.opacity = '0.8';
  block_avatar.querySelector('#block_avatar > img').style.filter = 'hue-rotate(240deg)';
}

function change_logo_out() {
  block_avatar = document.getElementById('block_avatar')
  block_avatar.querySelector('#block_avatar > img').style.width = '50%';
  block_avatar.querySelector('#block_avatar > img').style.opacity = '1';
  block_avatar.querySelector('#block_avatar > img').style.filter = 'hue-rotate(0deg)';
}









function blackout_over() {
  r_backness = document.getElementById('darkness')
  r_backness.style.background = 'linear-gradient(270deg, rgba(9, 65, 100, 1) 30%, rgba(0, 5, 5, 1) 100%)';
  l_backness = document.getElementById('left_sector')
  l_backness.style.background = 'rgba(0, 5, 5, 1)';
  t_backness = document.getElementById('header')
  t_backness.style.backgroundColor = '#ffffff09';
  t_backness_space = document.getElementById('header').querySelector('#header a.logo')
  t_backness_space.style.marginRight = '2%';
  t_r_backness = document.getElementById('sector_r').querySelectorAll('#header a')
  for (let i = 0; i < t_r_backness.length; i++) {
    t_r_backness[i].style.color = 'rgb(0, 255, 255)';
    t_r_backness[i].style.fontSize = '160%';

  }
}

function blackout_out() {
  r_backness = document.getElementById('darkness')
  r_backness.style.background = 'radial-gradient(transparent, rgba(137, 225, 255, 0.5),rgba(255, 255, 255, 0.7))';
  l_backness = document.getElementById('left_sector')
  l_backness.style.background = 'rgba(5, 250, 250, 0.5)';
  t_backness = document.getElementById('header')
  t_backness.style.backgroundColor = '#ffffff6d';
  t_backness_space = document.getElementById('header').querySelector('#header a.logo')
  t_backness_space.style.marginRight = '5%';
  t_r_backness = document.getElementById('sector_r').querySelectorAll('#header a')
  for (let i = 0; i < t_r_backness.length; i++) {
    t_r_backness[i].style.color = 'rgba(0, 0, 0, 0.7)';
    t_r_backness[i].style.fontSize = '140%';
  }
}
