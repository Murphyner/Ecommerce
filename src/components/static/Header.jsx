import React, { useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import { IoSearchOutline } from 'react-icons/io5'
import { SlHeart } from 'react-icons/sl'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Sidemenu from './Sidemenu'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setNum } from '../../store/NumSlice'

function Header() {
    const [flag, setFlag] = useState(false)
    const flagSchema = { flag, setFlag }
    const navigate = useNavigate()

    const dispatch = useDispatch()

    function handleWish(){
        dispatch(setNum(4))
        navigate('/account')
    }

    function handleUser(){
        dispatch(setNum(1))
        navigate('/account')
    }

    return (
        <header className='px-8 py-4 md:px-0'>
            <Sidemenu flagSchema={flagSchema} />
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center lg:w-3/12'>
                        <button onClick={() => setFlag(!flag)} className='p-1 pl-0 mr-2 lg:hidden'>
                            <HiBars3 className='text-[1.25em]' />
                        </button>
                        <Link to={'/'} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-black">
                                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='flex items-center justify-between lg:w-8/12 xl:w-7/12'>
                        <div className='hidden lg:flex items-center lg:w-10/12 justify-between'>
                            <nav>
                                <ul id='nav-menu' className='flex items-center gap-4'>
                                    <li>
                                        <NavLink to={'/'}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/about'}>
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/products'}>
                                            Products
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/contact'}>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                <div className='bg-[#F1F1F1] py-3 rounded-[50px] px-4 flex items-center'>
                                    <span>
                                        <IoSearchOutline />
                                    </span>
                                    <input type="text" className='text-[#787878] pl-2 outline-none bg-transparent text-[0.875em]' placeholder='Search for..' />
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:w-2/12 lg:justify-end items-center'>
                            <div>
                                <button onClick={handleUser} className='p-1'>
                                    <AiOutlineUser className='text-[1.25em]' />
                                </button>
                            </div>
                            <div>
                                <button className='p-1 mx-2'>
                                    <SlHeart onClick={handleWish} className='text-[1.25em]' />
                                </button>
                            </div>
                            <div className='relative'>
                                <button onClick={() => navigate('/cart')} className='p-1'>
                                    <BsBag className='text-[1.25em]' />
                                </button>
                                <span className='flex w-4 bg-[#DC375F] rounded-[50px] h-4 justify-center items-center text-[10px] text-white absolute top-[-3px] right-[-6px]'>3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header