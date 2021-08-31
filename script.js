const hamburgerEl = document.querySelector('.hamburger')
const moduleContainerEl = document.querySelector('.module-container')

hamburgerEl.addEventListener('click', () => {
    moduleContainerEl.classList.toggle('show')
})