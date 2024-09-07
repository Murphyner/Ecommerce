import React from 'react'
import { RiDiscountPercentLine } from 'react-icons/ri'

function BasketCupon() {
    return (
        <div>
            <h3 className='font-semibold mb-2 text-[1em] text-[#DC375F]'>Have a coupon?</h3>
            <p className='text-[0.875em] mb-4 text-[#6C7275] font-normal'>Add your code for an instant cart discount</p>
            <form className='border flex items-center justify-between p-3 border-[#6C7275]'>
                <div className='flex gap-1 items-center'>
                    <span>
                        <RiDiscountPercentLine className='text-[1.3em]' />
                    </span>
                    <input type="text" className='font-medium outline-none text-[#6C7275] block w-full text-[1em]' placeholder='Coupon Code' />
                </div>
                <button className='text-[#DC375F] font-medium text-[1em]'>Apply</button>
            </form>
        </div>
    )
}

export default BasketCupon