import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setWishArr } from '../../store/WishlistSlice'
import { useAddCartMutation } from '../../store/api'
import { toast } from 'react-toastify'

function WishlistComp() {

    const [addCart, {isSuccess}] = useAddCartMutation()
    const dispatch = useDispatch()
    const { wishArr } = useSelector(state => state.WishlistSlice)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        if(wishArr.length > 0){
            setFlag(true)
        }else{
            setFlag(false)
        }
    },[wishArr])

    function handleDelWish(obj){
        dispatch(setWishArr(obj))
    }

    function handleAddCart(arr){
        let obj = {
            productId: Number(arr.id),
            count : 1,
            color : "RED",
            size : "S"
        }
        addCart(obj)
    }

    useEffect(() => {
        if(isSuccess){
            toast.success("Added Cart")
        }
    }, [isSuccess])

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Your Wishlist</h3>
            </div>
            <div>
                <ul className='border-b sm:flex sm:items-center border-[#E8ECEF] pb-2'>
                    <li className='text-[0.875em] sm:w-6/12 font-normal text-[#6C7275]'>Product</li>
                    <li className='text-[0.875em] hidden sm:w-3/12 sm:block font-normal text-[#6C7275]'>Price</li>
                    <li className='text-[0.875em] hidden sm:w-3/12 sm:block font-normal text-[#6C7275]'>Action</li>
                </ul>
                {!flag ?
                    <div className='h-[250px] flex items-center justify-center'>
                        <div>
                            <h2 className='text-center mb-4 font-bold text-[1.3em]'>Wishlist is empty</h2>
                            <div className='flex justify-center items-center'>
                                <Link to="/products/all" className="bg-[#DC375F] text-white py-2 px-4 rounded">
                                    Go to Shop
                                </Link>
                            </div>
                        </div>
                    </div>
                    : wishArr.map((item) => (
                        <ul key={nanoid()}>
                            <li className='flex flex-wrap sm:items-center py-4 border-b border-[#E8ECEF]'>
                                <div className='w-full sm:w-6/12 mb-3'>
                                    <div className='flex gap-2 items-center'>
                                        <button 
                                        onClick={() => handleDelWish(item)}
                                        className='text-[#6C7275]'>
                                            <IoMdClose />
                                        </button>
                                        <div className='flex gap-2'>
                                            <div className='w-20 h-20'>
                                                <img src={item.images[0]} alt="" className='w-full h-full' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <h2 className='text-[0.875em] font-semibold'>{item.name}</h2>
                                                <p className='text-[0.75em] font-normal text-[#6C7275]'>Color: {item.Colors[0]}</p>
                                                <div className='text-[#DC375F] sm:hidden text-[0.875em] font-normal'>
                                                    <p className={`${item.discount ? 'line-through text-[#ccc] font-medium text-[.925em]' : 'hidden'}`}>$ {item.price}</p>
                                                    <p>$ {item.discount ? (item.price - item.discount).toFixed(2) : item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden sm:block sm:w-3/12'>
                                    <div className='text-[#DC375F] text-[0.875em] font-medium'>
                                        <p className={`${item.discount ? 'line-through text-[#ccc] font-medium text-[.925em]' : 'hidden'}`}>$ {item.price}</p>
                                        <p>$ {item.discount ? (item.price - item.discount).toFixed(2) : item.price}</p>
                                    </div>
                                </div>
                                <div className='w-full sm:w-3/12'>
                                    <div>
                                        <button 
                                        onClick={() => handleAddCart(item)}
                                        className='bg-[#DC375F] font-medium text-[1em] rounded-lg text-white block w-full py-[6px]'>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
            </div>
        </div>
    )
}

export default WishlistComp