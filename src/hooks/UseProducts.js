import axios from "axios";
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products,setProduct] = useState([])
    useEffect(() => {
        axios.get('products.json')
        .then(data => setProduct(data.data))
    },[])
    return [products,setProduct]
}

export default useProducts