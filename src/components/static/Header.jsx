import React, { useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import { IoSearchOutline } from 'react-icons/io5'
import { SlHeart } from 'react-icons/sl'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Sidemenu from './Sidemenu'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setNum } from '../../store/NumSlice'
import { useAllCartQuery } from '../../store/api'
import { setBasket } from '../../store/BasketSlice'
import { toast } from 'react-toastify'
import { skipToken } from '@reduxjs/toolkit/query'
import { setCategoryId } from '../../store/FilterSlice'
import { setWishArr } from '../../store/WishlistSlice'
import SearchOverlay from './SearchOverlay'
import { FaXmark } from 'react-icons/fa6'

function Header() {
    const [flag, setFlag] = useState(false)
    const flagSchema = { flag, setFlag }

    const {wishArr} = useSelector(state => state.WishlistSlice)

    const [wishlist, setWishlist] = useState([])

    
    const [overlay, setOverlay] = useState(false)
    const [value, setValue] = useState('')
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        const w = JSON.parse(localStorage.getItem("wish"))
        setWishlist(w)
    }, [wishArr])

    const token = localStorage.getItem("token")
    const { basket, basketFlag } = useSelector((state) => state.BasketSlice)

    const { data, isLoading, refetch } = useAllCartQuery(token ? undefined : skipToken);

    useEffect(() => {
        if (token) {
            if (!isLoading && data) {
                dispatch(setBasket(data))
            }
        }
    }, [isLoading, token, data])

    useEffect(() => {
        if (token && basketFlag) {
            refetch();
        }
    }, [basketFlag, token, refetch]);


    function handleWish() {
        dispatch(setNum(4))
        navigate('/account')
        setOverlay(false)
    }

    function handleUser() {
        dispatch(setNum(1))
        navigate('/account')
        setOverlay(false)
    }

    function goCart() {
        if (basket.length > 0) {
            navigate('/cart')
        } else {
            toast.error("Your cart is empty", {
                autoClose: 1000,
                style: {
                    color: "#000"
                }
            })
        }
        setOverlay(false)
    }

    function closeOver(e) {
        e.stopPropagation()
        setOverlay(false)
        setValue('')
    }

    return (
        <header className='px-8 py-4 md:px-0 sticky z-[900] top-0 bg-white shadow-md'>
            <Sidemenu flagSchema={flagSchema} />
            {overlay && <SearchOverlay value={value} />}
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center lg:w-3/12'>
                        <button onClick={() => setFlag(!flag)} className='p-1 pl-0 mr-2 lg:hidden'>
                            <HiBars3 className='text-[1.25em]' />
                        </button>
                        <Link to={'/'} >
                            <p className='text-[1.1em] md:text-[1.6em] tracking-tight font-serif italic font-medium'>Fashion</p>
                        </Link>
                    </div>
                    <div className='flex items-center justify-between lg:w-8/12 xl:w-7/12'>
                        <div className='hidden lg:flex items-center lg:w-10/12 justify-between'>
                            <nav className='w-6/12'>
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
                                        <NavLink to={'/products/all'} onClick={() => dispatch(setCategoryId(0))}>
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
                            <div className='w-6/12'>
                                <div onClick={() => setOverlay(true)} className='bg-[#F1F1F1] relative py-3 rounded-[10px] px-4 flex items-center'>
                                    <span>
                                        <IoSearchOutline />
                                    </span>
                                    <input
                                        onChange={(e) => setValue(e.target.value)}
                                        value={value}
                                        type="text"
                                        className='text-[#787878] pl-2 outline-none bg-transparent text-[0.875em]'
                                        placeholder='Search for..' />
                                    <span className='z-[999] absolute cursor-pointer right-2'>
                                        {overlay && <FaXmark onClick={(e) => closeOver(e)} />}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:w-2/12 lg:justify-end items-center'>
                            <div>
                                <button onClick={handleUser} className='p-1'>
                                    <AiOutlineUser className='text-[1.25em]' />
                                </button>
                            </div>
                            <div className='relative'>
                                <button className='p-1 mx-2'>
                                    <SlHeart onClick={handleWish} className='text-[1.25em]' />
                                </button>
                                <span
                                    className={`${wishlist?.length > 0 ? 'flex' : 'hidden'} w-4 bg-[#DC375F] rounded-[50px] h-4 justify-center items-center text-[10px] text-white absolute top-[-3px] right-[1px]`}>
                                    {wishlist?.length}
                                </span>
                            </div>
                            <div className='relative'>
                                <button onClick={goCart} className='p-1'>
                                    <BsBag className='text-[1.25em]' />
                                </button>
                                <span
                                    className={`${basket?.length > 0 ? 'flex' : 'hidden'} w-4 bg-[#DC375F] rounded-[50px] h-4 justify-center items-center text-[10px] text-white absolute top-[-3px] right-[-6px]`}>
                                    {basket?.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header