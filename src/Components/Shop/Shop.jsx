import { useEffect, useState } from 'react';
import { addToDb, clear } from '../../fakeDb/fakeDb';
import { useCart } from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import CartSummary from '../CartSummary/CartSummary';
import Product from '../Product/Product';
const Shop = () => {
    const [ products,setProduct ] = useProducts()
    const [carts,setCart] = useCart(products)

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = carts.find(product => product.key === selectedProduct.key);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...carts,selectedProduct]
        }
        else{
            const rest = carts.filter(product => product.key !== selectedProduct.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        addToDb(selectedProduct.key) 
        setCart(newCart)
    }
    const Clear = () => {
        setCart([])
        clear()
    }
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 bg-slate-100'>
            <div className='md:col-span-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center my-5 mx-5 md:order-1 order-2'>
                {
                    products.map(product => <Product key={product.key} addToCart={addToCart} product={product}></Product>)
                }
            </div>
            <div className='text-white bg-slate-600 md:sticky top-[90px] md:h-[100vh] md:h-[90vh] h-[60vh] md:order-2 order-1 md:block md:m-0 mx-7 my-3 md:shadow shadow-xl rounded-md'>
                 {
                     <CartSummary carts={carts} Clear={Clear}></CartSummary>
                 }
            </div>
        </div>
    );
};

export default Shop;