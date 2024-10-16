const navMenu = document.querySelector('nav>button:nth-child(2)')

const containerContent = document.querySelector("#content")

function text(){
    containerContent.textContent = 'Choose Your Food to Buy and Eat'
}

export{navMenu, text}