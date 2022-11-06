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
    dots:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

const nav_carousel = document.querySelector('.owl-nav')
const items = document.querySelectorAll('.item')

// change color when nav is hovered over
nav_carousel.addEventListener('mouseover', e => {
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

            elem.classList.add('mouse_over')
            console.dir( coordinates )
        }
    })
})

// change color back when nav stopped being hovered over
nav_carousel.addEventListener('mouseout', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    items.forEach( elem => {
        const coordinates = elem.getBoundingClientRect()

        if ( coordinates.left < mouseX && 
            coordinates.right > mouseX &&
            coordinates.top < mouseY && 
            coordinates.bottom > mouseY ) {

            elem.classList.remove('mouse_over')
        }
    })
})

// change colors when moving over nav
nav_carousel.addEventListener('mousemove', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    items.forEach( elem => {
        const coordinates = elem.getBoundingClientRect()

        if ( coordinates.left < mouseX && 
            coordinates.right > mouseX &&
            coordinates.top < mouseY && 
            coordinates.bottom > mouseY ) {

            elem.classList.add('mouse_over')
        } else {
            elem.classList.remove('mouse_over')
        }
    })
})