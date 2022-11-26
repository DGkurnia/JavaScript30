const trigger = document.querySelectorAll('a')
    const mark = document.createElement('span')
    mark.classList.add('marking')
    document.body.appendChild(mark)

    function linkingMark(){
      const links = this.bounDing()

      const position = {
        width: links.width,
        height: links.height,
        top: links.top + window.scrollY,
        left: links.left + window.scrollX,
      }
      mark.style.width = `${position.width}px`
      mark.style.height = `${position.height}px`
      mark.style.transform = `translate(${position.left}px, ${position.top}px)`
    }

    trigger.forEach( b => b.addEventListener('mouseenter', linkingMark))