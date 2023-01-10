import './index.css';


const blockCookie = document.querySelector('.cookie-consent')
const showInfoCookie = localStorage.getItem('block')
const checkBlock = JSON.parse(showInfoCookie)
if(checkBlock){
    blockCookie.style.display = "none"
}

blockCookie.addEventListener('click', event => {
    console.log(event)
    if(event.target === document.querySelector('.cookie-consent__button')){
        localStorage.setItem('block', 'true')
    }
})