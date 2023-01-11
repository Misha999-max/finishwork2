import './index.css';
import { checkLocalStorage } from './src/core/utilit';


const blockCookie = document.querySelector('.cookie-consent')
const checkitem = checkLocalStorage('block')
console.log(checkitem)
if(checkitem){
    blockCookie.style.display = "none"
}

blockCookie.addEventListener('click', event => {
    console.log(event)
    if(event.target === document.querySelector('.cookie-consent__button')){
        blockCookie.style.display = "none"
        localStorage.setItem('block', 'true')
    }
})