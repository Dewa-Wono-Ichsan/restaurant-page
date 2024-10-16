import homeImage from "./asset/image/padang-restaurant.jpeg"

const navHome = document.querySelector('nav>button:nth-child(1)')

const containerContent = document.querySelector("#content")

const image = document.createElement('img')
image.src = homeImage

function text(){
    containerContent.textContent = 'Welcome to Bestest Padang Restaurant'
    containerContent.appendChild(image)
}

export{navHome, text}