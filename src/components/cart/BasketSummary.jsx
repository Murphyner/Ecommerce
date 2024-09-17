import React, { useEffect, useState } from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSummaryNum, setTotalSum } from '../../store/BasketSlice'

function BasketSummary() {
    const navigate = useNavigate()

    const {summaryNum, sum, totalSum} = useSelector(state => state.BasketSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        if (summaryNum === 1) {
            dispatch(setTotalSum(sum)) 
        } else if (summaryNum === 2) {
            dispatch(setTotalSum(sum + 15))
        }
    }, [summaryNum, sum]) 

    return (
        <div>
            <div className='border border-[#6C7275] rounded-[6px] p-3'>
                <h3 className='text-[1em] lg:text-[1.25em] font-semibold mb-3'>Cart summary</h3>
                <div className='flex flex-col'>
                    <button
                        onClick={() => dispatch(setSummaryNum(1))}
                        className={`border flex px-3 ${summaryNum === 1 ? 'border-[#DC375F]' : 'border-[#6C7275]'} py-3 rounded mb-3 justify-between items-center w-full `}>
                        <div className='flex gap-2 items-center'>
                            {summaryNum === 1 ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Free shipping</p>
                        </div>
                        <span className='text-[0.875em] lg:text-[1em] font-semibold'>$0.00</span>
                    </button>
                    <button
                        onClick={() => dispatch(setSummaryNum(2))}
                        className={`border flex px-3 ${summaryNum === 2 ? 'border-[#DC375F]' : 'border-[#6C7275]'} py-3 rounded mb-3 justify-between items-center w-full border-[#6C7275]`}>
                        <div className='flex gap-2 items-center'>
                            {summaryNum === 2 ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Express shipping</p>
                        </div>
                        <span className='text-[0.875em] lg:text-[1em] font-semibold'>+$15.00</span>
                    </button>
                </div>
                <div className='mb-3'>
                    <div className='flex justify-between py-3 border-b border-[#EAEAEA] items-center'>
                        <p className='text-[0.875em] lg:font-normal lg:text-[1em] font-bold'>Subtotal</p>
                        <span className='text-[0.875em] lg:font-semibold lg:text-[1em] font-bold'>$ {sum}</span>
                    </div>
                    <div className='flex justify-between py-3 items-center'>
                        <p className='text-[0.875em] lg:text-[1.25em] font-bold'>Total</p>
                        <span className='text-[0.875em] lg:text-[1.25em] font-bold'>$ {totalSum}</span>
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