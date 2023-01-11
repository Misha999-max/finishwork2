export const checkLocalStorage = (key) => {
    if(localStorage) {
        const checkOnHaveItem = localStorage.getItem(key)
        return checkOnHaveItem
    }else{
        return false
    }
    
}