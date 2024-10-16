const navNews = document.querySelector('nav>button:nth-child(3)')

const containerContent = document.querySelector("#content")

function text(){
    containerContent.textContent = 'Read Our Breaking News and Special Event, also Update Video Short from us'
}

export{navNews, text}