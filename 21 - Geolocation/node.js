const arSign = document.querySelector('.arrow')
const vvalue = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((d)=>{
    console.log(d)
    vvalue.textContent = d.coords.speed
    const hvalue = data.coords.heading
    arrow.style.transform(`rotate(${hvalue}deg)`)
}, (error) =>{
    console.error(error)
    alert(`GEOPOSITION ON!`)
})