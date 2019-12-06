window.onload = function(){
    // your code
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
    
};
