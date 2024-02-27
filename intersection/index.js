const box = document.getElementById('box');
const container = document.getElementById('container');
// Observer

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
};

let observer = new IntersectionObserver(animateBox, options);

observer.observe(box);

function animateBox(entries) {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            box.classList.add('up');
        }
    });
}
