
import './style.css'

const hiddenEL = document.querySelectorAll|(".hiddenitem")

const slidersEL = document.getElementById("sliders")

const getSlide = async ()=>{
    const res = await fetch("https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state");
    const data = await res.json
    console.log(data)
}
getSlide()