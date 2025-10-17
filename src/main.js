
import './style.css'

const hiddenEL = document.querySelectorAll|(".hiddenitem")

const slidersEL = document.getElementById("sliders")

const getSlide = async ()=>{
    const res = await fetch("https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state");
    const data = await res.json
    console.log(data)
    
    data.forEach((slide)=>{
    getSlide.innerHTML+=`<div
            class="flex flex-col duration-300 min-w-[300px] gap-4 p-5 hover:scale-105 hover:bg-gray-100"
          >
            <img src="./src/imag/${slide.image}" />
            <span class="text-one text-xl font-bold"
              >$ <span class="text-gray-500">${slide.price}</span></span
            >
            <span class="text-two text-2xl font-bold">${slide.name}</span>
            <span class="text-gray-500 text-[12px]"
              >${slide.adress}</span
            >
          </div>`
  })
}
getSlide()

hiddenEL.forEach((card) => {
  const openEl = card.querySelector(".open");
  card.addEventListener("click", () => {
    card.classList.toggle("hiddenitem");
    openEl.classList.toggle("open");
  });
});