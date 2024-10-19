import './styles.css'
import {navHome, text as homeText} from "./nav-home.js"
import {navMenu, text as manuText} from "./nav-menu.js"
import {navNews, text as newsText} from "./nav-news.js"
import {navAbout, text as aboutText} from "./nav-about.js"
import {navContactUs, text as contacUsText} from "./nav-contact-us.js"

navHome.addEventListener("click", homeText)
navMenu.addEventListener("click", manuText)
navNews.addEventListener("click", newsText)
navAbout.addEventListener("click", aboutText)
navContactUs.addEventListener("click", contacUsText)