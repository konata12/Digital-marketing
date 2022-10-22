const nextIcon = '<img src="img/arrow_right.png" alt="next">'
const prevIcon = '<img src="img/arrow_left.png" alt="previous">'

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    dots:true
})

const nav = document.querySelector('.owl-nav')
const items = document.querySelectorAll('.item')

nav.addEventListener('mouseover', () => {

})

console.dir(nav)
console.dir(items)