import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import img from '../../assets/products1.jfif'
import { IoMdClose } from 'react-icons/io'

function WishlistComp() {
    return (
        <div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Your Wishlist</h3>
            </div>
            <div>
                <ul className='border-b sm:flex sm:items-center border-[#E8ECEF] pb-2'>
                    <li className='text-[0.875em] sm:w-6/12 font-normal text-[#6C7275]'>Product</li>
                    <li className='text-[0.875em] hidden sm:w-3/12 sm:block font-normal text-[#6C7275]'>Price</li>
                    <li className='text-[0.875em] hidden sm:w-3/12 sm:block font-normal text-[#6C7275]'>Product</li>
                </ul>
                {Array.from({ length: 4 }).map((_, index) => (
                    <ul key={nanoid()}>
                        <li className='flex flex-wrap sm:items-center py-4 border-b border-[#E8ECEF]'>
                            <div className='w-full sm:w-6/12 mb-3'>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-[#6C7275]'>
                                        <IoMdClose />
                                    </button>
                                    <div className='flex gap-2'>
                                        <div className='w-20 h-20'>
                                            <img src={img} alt="" className='w-full h-full' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='text-[0.875em] font-semibold'>Tray Table</h2>
                                            <p className='text-[0.75em] font-normal text-[#6C7275]'>Color: Black</p>
                                            <span className='text-[#DC375F] sm:hidden text-[0.875em] font-normal'>$19.19</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden sm:block sm:w-3/12'>
                                <p className='text-[0.875em] font-normal'>$19.19</p>
                            </div>
                            <div className='w-full sm:w-3/12'>
                                <div>
                                    <button className='bg-[#DC375F] font-medium text-[1em] rounded-lg text-white block w-full py-[6px]'>
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