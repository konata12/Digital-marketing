const logo = document.querySelector('#logo')
const nav_header = document.querySelector('.nav')
console.dir(logo)
console.dir(nav_header)
console.dir(window.innerWidth)

// add class for nav
logo.addEventListener('mouseover', e => {
    if (window.innerWidth <= 500) {
        nav_header.classList.add('hover')
    }
})

// remove class from nav
logo.addEventListener('mouseout', e => {
    if (window.innerWidth <= 500) {
        // nav_header.classList.remove('hover')
        function remove() {
            nav_header.classList.remove('hover')
        }
        let timerId = setTimeout(remove, 500)
    
        nav_header.addEventListener('mouseover', function() {
            clearTimeout(timerId)
            nav_header.classList.add('hover')
        })
    
        nav_header.addEventListener('mouseout', function() {
            nav_header.classList.remove('hover')
        })
    }
})