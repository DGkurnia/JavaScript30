const boxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let recenChecked;

function handler(el){
 let mark = false
if(el.shiftkey && this.checked){
    boxes.forEach(check=>{
        console.log(check)
        if(check === this || check === recenChecked) mark = true
        console.log('checking Between Item')

        if(mark) check.checked = true
    })

}

recenChecked = this

}

const unit = boxes.forEach(c=> c.addEventListener(
    'click', handler))
    
