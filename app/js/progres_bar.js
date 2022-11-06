const stat = document.querySelectorAll('.stat')

stat.forEach( elem => {
    const reg_exp_num = /\d{1,3}/
    const percent = Number(elem.children[0].children[1].textContent.match(reg_exp_num))
    progress_bar = elem.children[1].children[0]
    progress_bar.style.left = -(progress_bar.clientWidth - Math.round(progress_bar.clientWidth / 100 * percent)) + 'px'
})