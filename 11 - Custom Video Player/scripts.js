/*
Instructions :
1. set the elements for video
2.build the function
3. hook the event listener
*/
//video element
const play = document.querySelector('.player')
const video = play.querySelector('.viewer')
const progress = play.querySelector('.progress')
const bar = play.querySelector('.progress__filled')
const toggle = play.querySelector('.toggle')
const skip = play.querySelector('.[data-skip]')
const playrange = play.querySelector('.player__slider')

//function
function videoPlayer(){
    const vidProgress = video.paused ? 'play' : 'paused'
    video[vidProgress]()
}

function upDate(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function vidSkip(){
    video.currentTime += parseFloat(this.dataseet.skip)
}

function handling(){
    video[this.name] = this.value
    const percentage = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percentage}%`;
}


function scrubing(el) {
    
}

//hooking
