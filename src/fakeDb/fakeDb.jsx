const addToDb = (id) => {
    let shoppinCart = {}
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppinCart = JSON.parse(storeCart)
    }
    const quantity = shoppinCart[id]
    if(quantity){
        shoppinCart[id] = quantity + 1;
    }
    else{
        shoppinCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppinCart))
}

const getCartDb = () => {
    let shoppinCart = {}
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppinCart = JSON.parse(storeCart)
    }
    return shoppinCart;
}

const removeToDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id]
        }
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
    }
}
const clear = () => {
    localStorage.removeItem('shopping-cart')
}
export { addToDb, getCartDb,removeToDb,clear} 