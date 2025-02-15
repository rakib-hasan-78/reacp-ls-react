// get items===>

import Product from "../../components/Product";

const getLS = ()=>{
    const getStorage = localStorage.getItem('cart');
    return getStorage ? JSON.parse(getStorage) : [];
}

// save to LS

const saveLS = (cart)=>{
    const savedItems  = JSON.stringify(cart);
    localStorage.setItem('cart', savedItems);
}

// add items from ui to LS ===>

const addToList = id =>{
    const cart  = getLS();
    if (!cart.includes(id)){
        cart.push(id);
        saveLS(cart)
    }
    
}

// remove items from LS ===> 

const removeToLS = id=>{
    const targetItem = getLS();
    const restData = targetItem.filter((idx=> idx!==id));
    saveLS(restData);

}




export {getLS, addToList, removeToLS}