const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


// this below brings out the close button and the downward list when the hamburger is clicked

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('nav-link').forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active')

    }))