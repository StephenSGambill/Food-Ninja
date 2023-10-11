const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        console.log('hidden')
        menu.classList.remove('hidden')
    } else {
        console.log('not hidden')
        menu.classList.add('hidden')
    }
})