import { useEffect, useState } from "react"
import { getCartDb } from "../fakeDb/fakeDb";

const useCart = () => {
    const [cart,setCart] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const storedCart = getCartDb();
        const saveCart = []
        const keys = Object.keys(storedCart)
        fetch('http://localhost:5000/productByKey',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(data => {
            const products = data
            for(const key in storedCart){
                const addedProduct = products.find(product => product._id === key);
                // console.log(addedProduct)
                if(addedProduct){
                    const quantity = storedCart[key]
                    addedProduct.quantity = quantity;
                    saveCart.push(addedProduct)
                }
            }
            setLoading(false)
        })
        setCart(saveCart)
    },[])
    console.log(loading)
    return [ cart , setCart ,loading ]
}
export  { useCart }