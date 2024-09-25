import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { MdChevronLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

function BasketComplete() {
    const navigate = useNavigate()

    const [arr, setArr] = useState([])

    const {basket,totalSum} = useSelector(state => state.BasketSlice)

    useEffect(() => {
        if(basket.length > 0){
            setArr(basket)
        }
    }, [basket])

    return (
        <main className='pb-10'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div>
                        <button onClick={() => navigate('/')} className='flex md:hidden items-center gap-1 pr-1 py-1 text-[0.875em] font-medium text-[#605F5F]'>
                            <MdChevronLeft />
                            <span>back to home</span>
                        </button>
                    </div>
                    <div className='py-10'>
                        <div>
                            <h2 className='text-[2em] lg:text-[3.375em] md:text-[2.5em] font-medium text-center'>Check Out</h2>
                            <div className='py-5 lg:pt-10'>
                                <ul className='flex items-center md:justify-center gap-8 overflow-x-auto'>
                                    <li onClick={() => navigate('/cart')} className='flex cursor-pointer md:w-3/12 xl:w-2/12 items-center lg:gap-4 gap-2 pb-3 border-[#DC375F] border-b-2'>
                                        <span className='bg-[#DC375F] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>
                                            <FaCheck />
                                        </span>
                                        <p className='text-[#DC375F] font-semibold text-nowrap text-[1em]'>Shopping cart</p>
                                    </li>
                                    <li onClick={() => navigate('/checkout')} className='flex cursor-pointer md:w-3/12 xl:w-2/12 border-[#DC375F] border-b-2 lg:gap-4 items-center gap-2 pb-3'>
                                        <span className='bg-[#DC375F] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>
                                            <FaCheck />
                                        </span>
                                        <p className='text-[#DC375F] font-semibold text-nowrap text-[1em]'>Checkout details</p>
                                    </li>
                                    <li className='flex md:w-3/12 xl:w-2/12 border-[#23262F] border-b-2 lg:gap-4 items-center gap-2 pb-3'>
                                        <span className='bg-[#23262F] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>3</span>
                                        <p className='text-[#23262F] font-semibold text-nowrap text-[1em]'>Order complete</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "0px 32px 48px 48px #1212121A"
                        }}
                        className='p-5 lg:py-10 rounded'>
                        <div className='lg:w-[70%] lg:mx-auto'>
                            <div className='mb-8'>
                                <h4 className='text-[#6C7275] md:text-center md:text-[1.75em] font-semibold text-[1em] mb-4'>Thank you! 🎉</h4>
                                <h2 className='text-[2.1em] font-medium w-[50%] md:text-[2.5em] md:w-[70%] md:text-center mx-auto leading-10'>Your order has been received</h2>
                            </div>
                            <div className='flex mb-8 justify-center lg:w-[60%] lg:mx-auto flex-wrap'>
                                {arr.length > 0 && arr.map((item, index) => (
                                    <div key={nanoid()} className='w-4/12 md:flex md:justify-center px-1'>
                                        <div className='h-20 w-20 relative'>
                                            <img src={item.product_id.images[0]} className='w-full h-full' />
                                            <span className='w-4 absolute top-[-10px] right-[-5px] text-[0.625em] font-semibold h-4 flex justify-center items-center bg-[#DC375F] text-white rounded-[50px]'>2</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <ul className='md:w-[50%]  md:mx-auto'>
                                    <li className='py-4 flex flex-col md:flex-row md:border-0 gap-2 border-b border-[#E8ECEF]'>
                                        <p className='text-[0.875em] md:w-6/12 font-semibold text-[#6C7275]'>Order code:</p>
                                        <span className='text-[0.875em] md:w-6/12 font-semibold'>#0123_45678</span>
                                    </li>
                                    <li className='py-4 flex flex-col md:flex-row md:border-0  gap-2 border-b border-[#E8ECEF]'>
                                        <p className='text-[0.875em] md:w-6/12 font-semibold text-[#6C7275]'>Date:</p>
                                        <span className='text-[0.875em] md:w-6/12 font-semibold'>{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</span>
                                    </li>
                                    <li className='py-4 flex flex-col md:flex-row md:border-0 gap-2 border-b border-[#E8ECEF]'>
                                        <p className='text-[0.875em] md:w-6/12 font-semibold text-[#6C7275]'>Total:</p>
                                        <span className='text-[0.875em] md:w-6/12 font-semibold'>$1,345.00</span>
                                    </li>
                                    <li className='py-4 flex flex-col md:flex-row md:border-0 gap-2 border-b border-[#E8ECEF]'>
                                        <p className='text-[0.875em] md:w-6/12 font-semibold text-[#6C7275]'>Payment method:</p>
                                        <span className='text-[0.875em] md:w-6/12 font-semibold'>Credit Card</span>
                                    </li>
                                    <li className='pt-5'>
                                        <button onClick={() => navigate(`/account`)} className='bg-[#DC375F] text-white rounded-[80px] py-4 block w-full font-medium text-[1em]'>Purchase history</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BasketComplete