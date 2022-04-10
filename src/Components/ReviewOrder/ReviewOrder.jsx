import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const ReviewOrder = ({handleRemoveCart,cart}) => {
    const { img,name,price,shipping,quantity } = cart
    return (
        <div className='flex justify-between items-center w-96 h-28 bg-slate-500 text-white my-4 p-2 rounded-md shadow-lg'>
            <div>
                <img src={img} alt="" className='w-24 h-24'/>
            </div>        
            <div className='text-left'>
                <h1 className='text-xl ' title={name}>{name.length > 15 ? name.slice(0,15) + '...': name }</h1>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>  
                <p>Shipping Charge: ${shipping}</p>
            </div>    
            <div className='mx-2'>
                <button onClick={() => handleRemoveCart(cart)} className='bg-red-500 rounded-full p-3 shadow-xl'><TrashIcon className='w-8 '></TrashIcon></button>
            </div>
        </div>
    );
};

export default ReviewOrder;