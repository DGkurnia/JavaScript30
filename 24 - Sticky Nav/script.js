<<<<<<< Updated upstream
const nav = document.querySelector('#main')
let top = nav.offsetTop

function naviGation() {
    if (window.scrollY >= top ){
        document.body.style.paddingTop = `${nav.offsetHeight} px`;
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
}

=======
const nav = document.querySelector('#main')
let top = nav.offsetTop

function naviGation() {
    if (window.scrollY >= top ){
        document.body.style.paddingTop = `${nav.offsetHeight} px`;
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
}

>>>>>>> Stashed changes
window.addEventListener('scroll',naviGation)