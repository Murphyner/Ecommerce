import { nanoid } from '@reduxjs/toolkit'
import React from 'react'

function OrdersComp() {
    return (
        <div>
            <div className="mb-6">
                <h3 className="text-[1.25em] font-semibold mb-4">Orders History</h3>
            </div>
            <div>
                <ul className='border-[#E8ECEF] border-b pb-4 hidden lg:flex'>
                    <li className='text-[0.875em] w-3/12 font-normal text-[#6C7275]'>Number ID</li>
                    <li className='text-[0.875em] w-3/12 font-normal text-[#6C7275]'>Dates</li>
                    <li className='text-[0.875em] w-3/12 font-normal text-[#6C7275]'>Status</li>
                    <li className='text-[0.875em] w-3/12 font-normal text-[#6C7275]'>Price</li>
                </ul>
                {Array.from({ length: 4 }).map((_, index) => (
                    <ul key={nanoid()} className='border-b lg:flex border-[#E8ECEF] py-4'>
                        <li className='flex lg:w-3/12 items-center mb-3 lg:block'>
                            <span className='w-6/12 lg:hidden text-[0.875em] font-normal text-[#6C7275]'>Number ID</span>
                            <span className='w-6/12 text-[0.875em] font-normal'>#3456_768</span>
                        </li>
                        <li className='flex lg:w-3/12 items-center mb-3 lg:block'>
                            <span className='w-6/12 lg:hidden text-[0.875em] font-normal text-[#6C7275]'>Dates</span>
                            <span className='w-6/12 text-[0.875em] font-normal'>October 17, 2023</span>
                        </li>
                        <li className='flex lg:w-3/12 items-center mb-3 lg:block'>
                            <span className='w-6/12 lg:hidden text-[0.875em] font-normal text-[#6C7275]'>Status</span>
                            <span className='w-6/12 text-[0.875em] font-normal'>Delivered</span>
                        </li>
                        <li className='flex lg:w-3/12 items-center mb-3 lg:block'>
                            <span className='w-6/12 lg:hidden text-[0.875em] font-normal text-[#6C7275]'>Price</span>
                            <span className='w-6/12 text-[0.875em] font-normal'>$1234.00</span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default OrdersComp