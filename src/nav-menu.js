import rendangImage from "./asset/image/rendang.jpg"
import friedLeleImage from "./asset/image/fried-lele.png"
import friedRiceImage from "./asset/image/fried-rice.jpg"

const navMenu = document.querySelector('nav>button:nth-child(2)')

const containerContent = document.querySelector("#content")

const listMenu = document.createElement('div')
listMenu.classList.toggle('list-menu')

const image1 = document.createElement('img')
image1.src = rendangImage

const image2 = document.createElement('img')
image2.src = friedLeleImage

const image3 = document.createElement('img')
image3.src = friedRiceImage

function text(){
    containerContent.textContent = 'Choose Your Food to Buy and Eat'
    containerContent.appendChild(listMenu)
    
    const arrMenu = document.querySelectorAll('.menu')
    if(arrMenu.length === 0){

        for (let index = 0; index < 3; index++) {
            
            const menu = document.createElement('div')
            menu.classList.toggle('menu')
            listMenu.appendChild(menu)
            
        }
    }

    const menu1 = document.querySelector('.menu:first-child')
    const menu2 = document.querySelector('.menu:nth-child(2)')
    const menu3 = document.querySelector('.menu:nth-child(3)')
    
    menu1.appendChild(image1)
    menu2.appendChild(image2)
    menu3.appendChild(image3)
}

export{navMenu, text}