const player = document.querySelector('.player');
const images = document.querySelector('.photo');
const twoDshot = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const cheese = document.querySelector('.snap');

function videoProject(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(media =>{
        console.log(media)
        player.srcObject = media
        player.play()
    })
    .catch(err =>{
        console.error(`Video unavaliable`,err)
    })
}

function paintingCanvas(){
    const wvalue = player.videoWidth
    const hvalue = player.videoHeight
    images.width = wvalue
    images.height = hvalue

    return intervalTime(()=>{
        twoDshot.drawImage(player, 0, 0, wvalue,hvalue)
        let pxvalue = twoDshot.getImageData(player, 0, 0, wvalue,hvalue)
        pxvalue = rgbSplit(pxvalue)
        twoDshot.putImageData(pxvalue, 0, 0)
    }, 20)
}

function photoImg(){
    cheese.currentTime = 0
    cheese.play()

    const imgData = images.toDataURL('images/jpeg','images/png')
    const imgLink = document.createElement('a')
    imgLink.href = imgData
    imgLink.setAttribute('downlolad','facial')
    imgLink.innerHTML = `<img src = "${imgData}" alt = "Facial Images">`
    strip.insertBefore(imgLink, strip.firstChild)

}

function rgbSplit(px) {
    const pxdata = pixels.data
    const pxlength = pxdata.length
    for (let a = 0; a < pxlength; a+=4) {
        px.data[a - 150] = px.data[a + 0]
        px.data[a + 500] = px.data[a + 1]
        px.data[a - 550] = px.data[a + 2]
    }
    return px
}

function screenDisplay(px) {
    const levels = {}
    const pxdata2 = pixels.data
    const pxlength2 = pxdata2.length
    document.querySelectorAll('.rgb input').forEach((i)=>{
        levels[i.name] = i.value
    })
    for (let a = 0; a < pxlength2; a++) {
        red = pxdata2[a + 0]
        green = pxdata2[a + 1]
        blue = pxdata2[a + 2]
        alpha = pxdata2[a + 3]

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pxdata2[a + 3] = 0;
          }
    }

    return px
}

videoProject()

player.addEventListener('canplay', paintingCanvas)