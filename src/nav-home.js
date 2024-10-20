import homeImage from "./asset/image/padang-restaurant.jpeg"

const navHome = document.querySelector('nav>button:nth-child(1)')

const containerContent = document.querySelector("#content")

const imageText = document.createElement('h3') 
imageText.textContent = 'Welcome to Bestest Padang Restaurant'
const image = document.createElement('img')
image.src = homeImage

function text(){
    containerContent.textContent = ''
    const arrMenu = document.querySelectorAll('.menu')
    if(arrMenu.length > 0){
        
        const listMenu = document.querySelector('.list-menu')
        listMenu.remove()
    }
    containerContent.appendChild(imageText)
    containerContent.appendChild(image)
}

export{navHome, text}