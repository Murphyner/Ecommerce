import React, { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import { MdChevronLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../components/cart/CheckoutForm'
import ShippingForm from '../components/formik/ShippingForm'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'
import BankCardForm from '../components/formik/BankCardForm'
import MobileBasketList from '../components/cart/MobileBasketList'

function Checkout() {
    const navigate = useNavigate()
    const formikRef1 = useRef(null);
    const formikRef2 = useRef(null);
    const formikRef3 = useRef(null);

    const handleButtonClick = async () => {
        const formikRefs = [formikRef1, formikRef2, formikRef3];
        let allFormsValid = true;

        for (const formikRef of formikRefs) {
            if (formikRef.current) {
                await formikRef.current.validateForm();
                if (!formikRef.current.isValid) {
                    allFormsValid = false;
                }
            }
        }
        if (allFormsValid) {
            navigate('/complete');
        }
    };
    
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
                            <h2 className='text-[2em] lg:text-[3.375em] md:text-[2.5em] font-medium text-center'>Check Out</h2>
                            <div className='py-5 lg:pt-10'>
                                <ul className='flex items-center md:justify-center gap-8 overflow-x-auto'>
                                    <li onClick={() => navigate('/cart')} className='flex cursor-pointer md:w-3/12 xl:w-2/12 items-center lg:gap-4 gap-2 pb-3 border-[#DC375F] border-b-2'>
                                        <span className='bg-[#DC375F] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>
                                            <FaCheck />
                                        </span>
                                        <p className='text-[#DC375F] font-semibold text-nowrap text-[1em]'>Shopping cart</p>
                                    </li>
                                    <li className='flex md:w-3/12 xl:w-2/12 border-[#23262F] border-b-2 lg:gap-4 items-center gap-2 pb-3'>
                                        <span className='bg-[#23262F] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>2</span>
                                        <p className='text-[#23262F] font-semibold text-nowrap text-[1em]'>Checkout details</p>
                                    </li>
                                    <li className='flex md:w-3/12 xl:w-2/12 lg:justify-center lg:gap-4 items-center gap-2 pb-3'>
                                        <span className='bg-[#B1B5C3] rounded-[50px] text-white h-10 w-10 flex items-center justify-center'>3</span>
                                        <p className='text-[#B1B5C3] font-semibold text-nowrap text-[1em]'>Order complete</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex pb-10 lg:items-start flex-wrap relative'>
                        <div className='w-full lg:w-8/12 xl:w-7/12 lg:pr-6'>
                            <div className='border border-[#6C7275] pt-6 pb-4 mb-8 px-4 rounded'>
                                <h4 className='font-semibold mb-4 text-[1em] lg:text-[1.25em]'>Contact Infomation</h4>
                                <CheckoutForm formikRef1={formikRef1} />
                            </div>
                            <div className='border border-[#6C7275] pt-6 pb-4 mb-8 px-4 rounded'>
                                <h4 className='font-semibold mb-4 text-[1em] lg:text-[1.25em]'>Shipping Address</h4>
                                <ShippingForm formikRef2={formikRef2} />
                                <div className='flex gap-2 items-center'>
                                    <input type="checkbox" className='border-[#F1F2F4]' />
                                    <span className='text-[#6C7275] font-normal text-[0.75em] lg:text-[1em]'>Use a different billing address (optional)</span>
                                </div>
                            </div>
                            <div className='border border-[#6C7275] pt-6 pb-4 mb-8 px-4 rounded'>
                                <h4 className='font-semibold mb-4 text-[1em] lg:text-[1.25em]'>Payment method</h4>
                                <div className='flex flex-col pb-4 border-b border-[#6C7275]'>
                                    <button className='border flex px-3 py-3 rounded mb-3 justify-between items-center w-full border-[#DC375F]'>
                                        <div className='flex gap-2 items-center'>
                                            <IoIosRadioButtonOn />
                                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Pay by Card Credit</p>
                                        </div>
                                    </button>
                                    <button className='border flex px-3 py-3 rounded mb-3 justify-between items-center w-full border-[#6C7275]'>
                                        <div className='flex gap-2 items-center'>
                                            <IoIosRadioButtonOff />
                                            <p className='text-[0.875em] lg:text-[1em] font-semibold'>Paypal</p>
                                        </div>
                                    </button>
                                </div>
                                <div className='pt-4'>
                                    <BankCardForm formikRef3={formikRef3} />
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:sticky lg:inset-0 lg:w-4/12 xl:w-5/12'>
                            <div className='border border-[#6C7275] pt-6 pb-4 mb-8 px-4 rounded'>
                                <h4 className='font-semibold mb-4 text-[1em] lg:text-[1.25em]'>Contact Infomation</h4>
                                <div className='mb-3'>
                                    <MobileBasketList />
                                </div>
                                <div className='flex'>
                                    <div className='w-8/12 pr-3'>
                                        <input className='border block w-full border-[#CBCBCB] rounded-md px-4 py-3' placeholder='Input' type="text" />
                                    </div>
                                    <div className='w-4/12 pl-3'>
                                        <button className='bg-[#DC375F] block w-full text-white font-medium text-[1em] rounded-lg py-3 px-4'>Apply</button>
                                    </div>
                                </div>
                                <div className='pt-4'>
                                    <ul>
                                        <li className='flex border-[#E8ECEF] border-b pb-4 justify-between items-center'>
                                            <span className='text-[1em] font-normal'>Shipping</span>
                                            <span className='text-[1em] font-semibold'>Free</span>
                                        </li>
                                        <li className='flex border-[#E8ECEF] border-b py-4 justify-between items-center'>
                                            <span className='text-[1em] font-normal'>Subtotal</span>
                                            <span className='text-[1em] font-semibold'>$99.00</span>
                                        </li>
                                        <li className='flex pt-4 justify-between items-center'>
                                            <span className='text-[1.25em] font-medium'>Total</span>
                                            <span className='text-[1.25em] font-medium'>$234.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-8/12 xl:w-7/12 lg:pr-6'>
                            <button onClick={handleButtonClick} className='block w-full bg-[#DC375F] text-white font-medium text-[1em] rounded-lg py-3'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Checkout