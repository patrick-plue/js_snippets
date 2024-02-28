const text = document.getElementById('text');
const container = document.getElementById('container');
// Observer

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
};

let observer = new IntersectionObserver(animateText, options);

observer.observe(text);

function animateText(entries) {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            text.classList.add('up');
        }
    });
}
