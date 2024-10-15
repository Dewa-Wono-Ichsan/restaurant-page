const navHome = document.querySelector('nav>button:nth-child(1)')

const containerContent = document.querySelector("#content")

function text(){
    containerContent.textContent = 'Welcome to Bestest Padang Restaurant'
}

export{navHome, text}