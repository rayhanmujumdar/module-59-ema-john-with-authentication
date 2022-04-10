import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [open,setOpen] = useState(false)
    const menuBar = (open) => {
        setOpen(open)  
    }
    const allok = (ok) => {
        setOpen(ok)
    }
    return (
        <div className='sticky top-0 z-20 bg-slate-800 text-white flex justify-between px-10 py-6 items-center'>
            <div>
                <img src={logo} alt="" className='w-full'/>
            </div>
            <div>
                <div onClick={() => menuBar(!open)} className={`w-6 md:hidden`}>
                    {
                        open ? <XIcon></XIcon>: <MenuIcon></MenuIcon>
                    }
                </div>
                <ul className={`md:flex text-left md:static absolute left-0 w-full md:bg-slate-800 bg-slate-700 md:p-0 p-10 duration-500 ${open ? 'top-24': 'top-[-300px]'}`}>
                    <li className='mx-3 font-mono text-lg'><CustomLink onClick={()=> allok(false)} to='/shop'>Shop</CustomLink></li>
                    <li className='mx-3 font-mono text-lg '><CustomLink onClick={()=> allok(false)} to='/orders' >Orders</CustomLink></li>
                    <li className='mx-3 font-mono text-lg '><CustomLink onClick={()=> allok(false)} to='/inventory'>Manage Inventory</CustomLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;