window.onload = function(){
let links = document.querySelectorAll('[href^="#"]');
const SPEED = 2.5;
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









document.getElementById("container").onmousemove = function(e) {
    obj = document.getElementById("darkness");
    obj.style.top = e.pageY - ($(obj).height() / 2) + "px";
    obj.style.left = e.pageX - ($(obj).width() / 2) - ($(body).width() / 4) + "px";
};









var isScrolling = false;
    window.addEventListener("scroll", throttleScroll, false);

    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);

    var content_text = document.querySelectorAll("#right_sector h3");
    // var graph_elem = document.querySelector("#graph_elem");

    function scrolling(e) {
      for (var i = 0; i < content_text.length; i++) {
        var listItem = content_text[i];
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } else {
          listItem.classList.remove("active");
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









$(window).on("scroll touchmove", function() {
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
    if ($(document).scrollTop() > $("#contact_").position().top) {
      $('body').css('background', $("#contact_").attr("data-color"))
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}









function change_logo_over(){
  block_avatar = document.getElementById('block_avatar')
  block_avatar.querySelector('#block_avatar > img').style.width = '55%';
  block_avatar.querySelector('#block_avatar > img').style.opacity = '0.8';
  block_avatar.querySelector('#block_avatar > img').style.filter = 'hue-rotate(240deg)';
}

function change_logo_out(){
  block_avatar = document.getElementById('block_avatar')
  block_avatar.querySelector('#block_avatar > img').style.width = '50%';
  block_avatar.querySelector('#block_avatar > img').style.opacity = '1';
  block_avatar.querySelector('#block_avatar > img').style.filter = 'hue-rotate(0deg)';
}









function blackout_over(){
  backness = document.getElementById('darkness')
  backness.style.background = 'linear-gradient(90deg, rgba(9,95,120,1) 30%, rgba(0,5,35,1) 100%)';
}

function blackout_out(){
  backness = document.getElementById('darkness')
  backness.style.background = 'radial-gradient(transparent, rgba(137, 225, 255, 0.5),rgba(255, 255, 255, 0.7))';
}
