const stat = document.querySelectorAll('.stat')
console.dir(stat)
stat.forEach( elem => {
    percent = +elem.children[0].children[1].textContent.trim().slice(0, 2)
    progress_bar = elem.children[1].children[0]
    progress_bar.style.left = -(progress_bar.clientWidth - Math.round(progress_bar.clientWidth / 100 * percent)) + 'px'
})