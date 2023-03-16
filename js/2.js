const bars=document.querySelectorAll(".bars")
function burger_nav(){
    bars.forEach(bar=> {
        bar.classList.toggle("open")
    });
    if(bars[0].classList.contains("open")){
        document.querySelector("nav").style.left="0"
    }
    else{
        document.querySelector("nav").style.left="-100%"
    }
}
function Navop(n) {
    var a = document.querySelectorAll('nav ul li');
    a.forEach(e => {
        e.classList.remove('active-op')
    });
    a[n].classList.add('active-op');
    gsap.to(window, { duration: 1, scrollTo: `#page${n + 1}`});
    if(bars[0].classList.contains("open")){
        burger_nav()
    }
}
function tab_link_ops(n) {
    var a = document.querySelectorAll('.tab-links-holder p');
    var b = document.querySelectorAll('.tab-links-content-holder div');
    a.forEach(e => {
        e.classList.remove('active-tab-link')
    });
    b.forEach(e => {
        e.classList.remove('active-content')
    });
    a[n].classList.add('active-tab-link');
    b[n].classList.add('active-content');
}