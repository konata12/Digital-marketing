const nav_header = document.querySelector('.nav')
const click_nav = document.querySelector('.click_nav')
// console.dir(nav_header)
// console.dir(click_nav)

// EVENTS

// add and remove class for nav on three lines click
click_nav.addEventListener('click', e => {

    nav_header.classList.forEach( elem => {
        if (elem === 'hover') {
            nav_header.classList.remove('hover')
            
            const lines = [...click_nav.children]
            lines.forEach( elem => {
                elem.classList.remove('anim')
                elem.classList.add('anim_alter')
            })
        } else {
            nav_header.classList.add('hover')

            const lines = [...click_nav.children]
            lines.forEach( elem => {
                elem.classList.remove('anim_alter')
                elem.classList.add('anim')
            })
        };
    })
})

// remove class for nav on out click
window.addEventListener('click', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const coordinates = click_nav.getBoundingClientRect()

    if ( coordinates.left < mouseX && 
        coordinates.right > mouseX &&
        coordinates.top < mouseY && 
        coordinates.bottom > mouseY ) {
            
        } else {
            nav_header.classList.remove('hover')

            const lines = [...click_nav.children]
            lines.forEach( elem => {
                elem.classList.remove('anim')
                elem.classList.add('anim_alter')
            })
        }
})