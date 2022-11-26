function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
const imgslide = document.querySelectorAll('.slide-in')

function slideCheck(e){
    imgslide.forEach(sim =>{
        const timer = (window.scrollY + window.innerHeight) - (imgslide.height/2)
        const bottom = imgslide.offsetTop + imgslide.height
        const halfshown = timer > imgslide.offsetTop
        const scroll = window.scrollY < bottom
        if(halfshown && scroll){
            imgslide.classList.add('active')
        } else {
            imgslide.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', debounce(slideCheck))