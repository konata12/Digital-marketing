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

nav.addEventListener('mouseover', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    console.dir( e )
    console.dir( mouseX )
    console.dir( mouseY )

    items.forEach( elem => {
        const coordinates = elem.getBoundingClientRect()

        if ( coordinates.left < mouseX && 
            coordinates.right > mouseX &&
            coordinates.top < mouseY && 
            coordinates.bottom > mouseY ) {
            console.dir( coordinates )
        }

        // console.dir( coordinates.left )
    })
    // console.dir( document.elementFromPoint(e.clientX, e.clientY) )
})

console.dir(nav)
console.dir(items)