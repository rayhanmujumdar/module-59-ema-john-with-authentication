import { useEffect, useState } from "react"
import { getCartDb } from "../fakeDb/fakeDb";

const useCart = (products) => {
    const [cart,setCart] = useState([]);
    useEffect(() => {
        const storedCart = getCartDb();
        const saveCart = []
        for(const key in storedCart){
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = storedCart[key]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    },[products])
    return [ cart, setCart ]
}
export  { useCart }