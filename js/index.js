document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.matchMedia({
        '(min-width:1100px) and (min-height:500px)': function () {
            const tl1 = gsap.timeline();
            tl1.from('.user_img', {
                duration: 1,
                y: 20,
                opacity: 0
            }, '')
            tl1.to('.user_img', {
                duration: 1,
                x: 500,
                width: '20%'
            }, '+=.5')
            tl1.from('nav', {
                opacity: 0,
                y: -10
            }, '+')
            tl1.from('.intro', {
                opacity: 0,
                x: 20
            })
        }
    })
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#page2',
            start: '-150 center',
            end: 'bottom center',
            toggleActions: "play reverse play reverse"
        }
    });
    tl2.from('.skills>progress', {
        duration: 1.5,
        value: 0
    });
})
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        console.log("Scroll value:", window.scrollY);
    }
});
function getContainerScroll(container) {
    if (container === window) {
        // If the container is the window, use window.scrollY
        return window.scrollY;
    } else {
        // Otherwise, use container.scrollTop and container.getBoundingClientRect()
        const rect = container.getBoundingClientRect();
        const scrollTop = container.scrollTop || 0;
        return rect.top + scrollTop;
    }
}

const myContainer = document.querySelector('#page3');
const scrollValue = getContainerScroll(myContainer);
console.log("Scroll value of my-container:", scrollValue);
