import React from 'react';
import {ShoppingCartIcon} from '@heroicons/react/solid'
const Product = ({product,addToCart}) => {
    const {img,name,star,price} = product
    return (
        <div className='bg-slate-700 text-white min-w-[300px] p-4 flex justify-center items-left flex-col rounded-lg'>
            <div className='flex justify-center'>
                <img src={img} alt="" className='rounded-md'/>
            </div>
            <div className='text-left my-3'>
                <h1 className='text-2xl'>{name.slice(0,15)}</h1>
                <p>Price: ${price}</p>
                <div className='my-4'>
                    <p>Rating: {star} star</p>
                </div>
            </div>
            <div>
                <button onClick={() => addToCart(product)} className='w-full flex justify-center items-center bg-slate-500 py-2 rounded-md hover:bg-slate-400'>Add to Cart <ShoppingCartIcon className='w-6'></ShoppingCartIcon></button>
            </div>
        </div>
    );
};

export default Product;