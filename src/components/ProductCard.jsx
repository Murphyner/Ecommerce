import React from 'react'
import img from '../assets/products1.jfif'
import { VscHeart } from 'react-icons/vsc'
import { IoEyeOutline } from 'react-icons/io5'
import { FaRegStar, FaStar } from 'react-icons/fa'

function ProductCard({ x }) {
    return (
        <div className='py-2 card relative'>
            <div className='h-48 sm:h-56 md:h-72 lg:h-64 xl:h-72 overflow-hidden relative'>
                <img className='w-full h-full' src={img} alt="" />
                <ul className='absolute look duration-300 flex flex-col gap-2 xl:gap-4 z-10 top-[50%] translate-y-[-50%] right-[-50px]'>
                    <li>
                        <button className='bg-white h-8 w-8 xl:h-10 xl:w-10 flex justify-center items-center rounded-[50px]'>
                            <VscHeart />
                        </button>
                    </li>
                    <li>
                        <button className='bg-white h-8 w-8 xl:h-10 xl:w-10 flex justify-center items-center rounded-[50px]'>
                            <IoEyeOutline />
                        </button>
                    </li>
                </ul>
            </div>
            <div className='bg-[#333] px-2 xl:px-[14px] xl:py-1 rounded-md font-bold text-[0.7125em] xl:text-[1em] z-10 absolute top-4 left-2 text-white uppercase'>new</div>
            <div className='py-4'>
                <div className='flex items-center mb-2 xl:mb-4 justify-center lg:justify-start'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        index < x ? <FaStar key={index} className='text-yellow-500' /> : <FaRegStar key={index} />
                    ))}
                </div>
                <h3 className='text-[0.875em] xl:text-[1em] mb-2 xl:mb-3 font-normal lg:text-start text-center'>Sleeveless Gown</h3>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <p className='text-center mb-2 font-medium text-[0.875em] xl:text-[1em] text-[#DC375F]'>$ 123</p>
                    <div className='flex justify-center'>
                        <button className='pb-[2px] xl:pb-0 xl:text-[1em] border-b-2 font-medium text-[0.75em] border-[#333333]'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard