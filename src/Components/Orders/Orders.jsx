import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clear, removeToDb } from '../../fakeDb/fakeDb';
import { useCart } from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import CartSummary from '../CartSummary/CartSummary';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Orders = () => {
    const [products,useProduct] = useProducts();
    const [carts,setCart] = useCart(products)
    const handleRemoveCart = (product) => {
        const rest = carts.filter(cart => cart.key !== product.key);
        setCart(rest)
        removeToDb(product.key)
    }
    const navigate = useNavigate()
    const reviowOrder = () => {
        const path = '/inventory'
        navigate(path)
    }
    const Clear = () => {
        setCart([])
        clear()
    }
    return (
        <div className='flex md:flex-row flex-col justify-around md:items-start items-center my-10'>
            <div className='bg-slate-200 p-10 rounded-xl m-4 md:order-1 order-2'>
                {
                    carts.map(cart => <ReviewOrder
                    key={cart.key}
                    cart = {cart}
                    handleRemoveCart = {handleRemoveCart}
                    ></ReviewOrder>)
                }
            </div>
            <div className='md:sticky top-[92px] md:m-0 m-auto order-1 md:order-2'>
                <CartSummary carts={carts} Clear={Clear} className='bg-slate-700 text-white p-4 rounded-md'>
                    <button onClick={reviowOrder} className='flex justify-center w-full bg-yellow-600 py-3 shadow-lg rounded-lg my-4 hover:bg-yellow-400'>Proceed Checkout <ArrowCircleRightIcon className='w-6 ml-3'></ArrowCircleRightIcon></button>
                </CartSummary>
            </div>
        </div>
    );
};

export default Orders;