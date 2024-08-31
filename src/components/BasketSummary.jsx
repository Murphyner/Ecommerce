import React from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function BasketSummary() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='border border-[#6C7275] rounded-[6px] p-3'>
                <h3 className='text-[1em] lg:text-[1.25em] font-semibold mb-3'>Cart summary</h3>
                <div className='flex flex-col'>
                    <button className='border flex px-3 py-3 rounded mb-3 justify-between items-center w-full border-[#DC375F]'>
                        <div className='flex gap-2 items-center'>
                            <IoIosRadioButtonOn />
                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Free shipping</p>
                        </div>
                        <span className='text-[0.875em] lg:text-[1em] font-semibold'>$0.00</span>
                    </button>
                    <button className='border flex px-3 py-3 rounded mb-3 justify-between items-center w-full border-[#6C7275]'>
                        <div className='flex gap-2 items-center'>
                            <IoIosRadioButtonOff />
                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Express shipping</p>
                        </div>
                        <span className='text-[0.875em] lg:text-[1em] font-semibold'>+$15.00</span>
                    </button>
                    <button className='border flex px-3 py-3 rounded mb-3 justify-between items-center w-full border-[#6C7275]'>
                        <div className='flex gap-2 items-center'>
                            <IoIosRadioButtonOff />
                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Pick Up</p>
                        </div>
                        <span className='text-[0.875em] lg:text-[1em] font-semibold'>%21.00</span>
                    </button>
                </div>
                <div className='mb-3'>
                    <div className='flex justify-between py-3 border-b border-[#EAEAEA] items-center'>
                        <p className='text-[0.875em] lg:font-normal lg:text-[1em] font-bold'>Subtotal</p>
                        <span className='text-[0.875em] lg:font-semibold lg:text-[1em] font-bold'>$1234.00</span>
                    </div>
                    <div className='flex justify-between py-3 items-center'>
                        <p className='text-[0.875em] lg:text-[1.25em] font-bold'>Total</p>
                        <span className='text-[0.875em] lg:text-[1.25em] font-bold'>$1345.00</span>
                    </div>
                </div>
                <button onClick={() => navigate('/checkout')} className='text-[1.125em] font-medium bg-[#DC375F] text-white flex justify-center w-full rounded-lg py-[12px]'>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default BasketSummary