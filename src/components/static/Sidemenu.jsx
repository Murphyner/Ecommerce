import React from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategoryId } from '../../store/FilterSlice'

function Sidemenu({ flagSchema }) {
    const dispatch = useDispatch()
    const { flag, setFlag } = flagSchema
    const cl = 'fixed inset-0 duration-300 border-r border-[#333] bg-white lg:hidden'
    const active = 'z-[999] translate-x-0'
    const deactive = 'z-[-1] translate-x-[-300%]'
    return (
        <div className={flag ? cl + ' ' + active : cl + ' ' + deactive }>
            <div>
                <div className='bg-[#333333] px-5 py-3 flex justify-between items-center' >
                    <h2 className='text-white'>MENU</h2>
                    <button onClick={() => setFlag(!flag)} className='text-white font-semibold text-[1em]'>
                        <RiCloseLargeFill />
                    </button>
                </div>
                <div className='py-3'>
                    <ul className='text-[#777777]'>
                        <li className='mb-2'>
                            <Link onClick={() => setFlag(!flag)} to={'/'} className='font-normal text-[0.875em] py-[6px] px-4'>
                                Home
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link onClick={() => setFlag(!flag)} to={'/about'} className='font-normal text-[0.875em] py-[6px] px-4'>
                                About
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link onClick={() => {setFlag(!flag), dispatch(setCategoryId(0))}} to={'/products/all'} className='font-normal text-[0.875em] py-[6px] px-4'>
                                Products
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link onClick={() => setFlag(!flag)} to={'/contact'} className='font-normal text-[0.875em] py-[6px] px-4'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidemenu