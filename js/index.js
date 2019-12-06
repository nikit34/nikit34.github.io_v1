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
}
