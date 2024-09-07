import { nanoid } from '@reduxjs/toolkit'
import img from '../../assets/products1.jfif'
import BasketSummary from './BasketSummary'
import { HiMiniMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import BasketCupon from './BasketCupon'

function BasketDesktop() {
    return (
        <div className='pb-20'>
            <div className='flex flex-wrap'>
                <div className='w-7/12 xl:w-8/12 xl:pr-6'>
                    <div className='flex items-center border-b pb-3 border-[#6C7275]'>
                        <p className='w-5/12 font-semibold text-[1em]'>Product</p>
                        <p className='w-3/12 text-center font-semibold text-[1em]'>Quantity</p>
                        <p className='w-2/12 text-center font-semibold text-[1em]'>Price</p>
                        <p className='w-2/12 text-right font-semibold text-[1em]'>Subtotal</p>
                    </div>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={nanoid()} className='flex py-4 border-b border-[#E8ECEF]'>
                            <div className='w-5/12'>
                                <div className='flex justify-between lg:justify-start lg:gap-4'>
                                    <div className='w-20 h-20'>
                                        <img src={img} alt="" className='w-full h-full' />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <h5 className='text-[0.875em] font-semibold'>Tray Table</h5>
                                        <p className='text-[#6C7275] text-[0.75em] font-normal'>Color: Black</p>
                                        <button className='text-[#6C7275] flex items-center gap-2'>
                                            <IoMdClose className='text-[1.1em]' />
                                            <span className='text-[0.875em] font-semibold'>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12'>
                                <div className='flex justify-center'>
                                    <div className='flex border border-[#6C7275] px-3 py-2 rounded items-center w-20 justify-between'>
                                        <button className='text-[#121212]'>
                                            <HiMiniMinusSmall />
                                        </button>
                                        <span className='font-semibold text-[0.75em] text-[#121212]'>1</span>
                                        <button className='text-[#121212]'>
                                            <HiOutlinePlusSmall />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-2/12 flex justify-center'>
                                <div className='text-[0.875em] text-[#121212] font-semibold'>$19.19</div>
                            </div>
                            <div className='w-2/12 flex justify-end'>
                                <div className='text-[0.875em] text-[#121212] font-semibold'>$19.19</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-5/12 xl:w-4/12 pl-6'>
                    <BasketSummary />
                </div>
                <div className="w-4/12 pt-6">
                    <BasketCupon />
                </div>
            </div>
        </div>
    )
}

export default BasketDesktop