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
        ctx.drawImage(player, 0, 0, wvalue,hvalue)
        let pxvalue = ctx.getImageData(player, 0, 0, wvalue,hvalue)
        pxvalue = rgbSplit(pxvalue)
        ctx.putImageData(pxvalue, 0, 0)
    }, 20)
}
