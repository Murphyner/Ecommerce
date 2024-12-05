import React, { useState, useEffect } from 'react'
import { MdChevronLeft } from 'react-icons/md'
import BasketMobile from '../components/cart/BasketMobile'
import { useNavigate } from 'react-router-dom'
import BasketDesktop from '../components/cart/BasketDesktop'

function Cart() {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 830)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 830)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <main>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div>
                        <button onClick={() => navigate('/')} className='flex md:hidden items-center gap-1 pr-1 py-1 text-[0.875em] font-medium text-[#605F5F]'>
                            <MdChevronLeft />
                            <span>back</span>
                        </button>
                    </div>
                    <div className='py-10'>
                        <div>
                            <h2 className='text-[2em] lg:text-[3.375em] md:text-[2.5em] font-medium text-center'>Cart</h2>
                            <div className='py-5 lg:pt-10'>
                                <ul className='flex items-center md:justify-center gap-8 overflow-x-auto'>
                                    <li className='flex md:w-3/12 xl:w-2/12 items-center lg:gap-4 gap-2 pb-3 border-[#DC375F] border-b-2'>
                                        <span className='bg-[#DC375F] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>1</span>
                                        <p className='text-[#DC375F] font-semibold text-nowrap text-[1em]'>Shopping cart</p>
                                    </li>
                                    <li className='flex md:w-3/12 xl:w-2/12 lg:justify-center lg:gap-4 items-center gap-2 pb-3'>
                                        <span className='bg-[#B1B5C3] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>2</span>
                                        <p className='text-[#B1B5C3] font-semibold text-nowrap text-[1em]'>Checkout details</p>
                                    </li>
                                    <li className='flex md:w-3/12 xl:w-2/12 lg:justify-center lg:gap-4 items-center gap-2 pb-3'>
                                        <span className='bg-[#B1B5C3] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>3</span>
                                        <p className='text-[#B1B5C3] font-semibold text-nowrap text-[1em]'>Order complete</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {isMobile ? <BasketMobile /> : <BasketDesktop />}
                </div>
            </div>
        </main>
    )
}

export default Cart
