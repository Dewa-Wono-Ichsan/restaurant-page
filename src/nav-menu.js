import rendangImage from "./asset/image/rendang.jpg"
import friedLeleImage from "./asset/image/fried-lele.png"

const navMenu = document.querySelector('nav>button:nth-child(2)')

const containerContent = document.querySelector("#content")

const listMenu = document.createElement('div')
listMenu.classList.toggle('list-menu')

const image1 = document.createElement('img')
image1.src = rendangImage

const image2 = document.createElement('img')
image2.src = friedLeleImage

function text(){
    containerContent.textContent = 'Choose Your Food to Buy and Eat'
    containerContent.appendChild(listMenu)
    
    for (let index = 0; index < 3; index++) {
        
        const menu = document.createElement('div')
        menu.classList.toggle('menu')
        listMenu.appendChild(menu)
        
    }

    document.querySelector('.menu').append(image1)

}

export{navMenu, text}