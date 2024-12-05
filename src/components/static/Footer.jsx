import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategoryId } from '../../store/FilterSlice'

function Footer() {
  const dispatch = useDispatch()
  return (
    <footer className='px-8 py-4 md:px-0 bg-[#F9F9F9]'>
      <div className="container 2xl:w-[1280px] mx-auto md:px-4">
        <div className='flex flex-wrap pt-6'>
          <div className='w-full mb-8 md:w-6/12 lg:w-5/12 lg:mb-0 md:pr-16'>
            <div>
              <div className='mb-3'>
                <Link to={'/'} >
                  <p className='text-[1.1em] md:text-[1.6em] tracking-tight font-serif italic font-medium'>Fashion</p>
                </Link>
              </div>
              <div>
                <p className='font-medium text-[0.9375em] leading-7 mb-5'>
                  Welcome to Logo, your go-to destination for quality household essentials. From kitchenware to home decor, we offer a curated selection of products designed to enhance your living space. With fast shipping and responsive customer service, we're here to make your shopping experience easy and enjoyable. Join us and discover the convenience of shopping for household items online at Logo
                </p>
                <div className='flex'>
                  <input type="text" placeholder='Email Address *' className='block border border-[#CECECE] w-8/12 px-4 py-3 outline-none bg-transparent' />
                  <button className='font-medium text-[0.7875em] uppercase tracking-widest text-white bg-[#DC375F] px-4 py-3 w-4/12'>Subcribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mb-8 md:w-6/12 lg:w-4/12 lg:mb-0 md:pl-10'>
            <div>
              <h2 className='font-medium text-[1.125em] mb-4 uppercase tracking-wider'>Contact info</h2>
              <div>
                <p className='font-normal mb-2 text-[1em]'>Phone: 888-999-000-1425</p>
                <p className='font-normal mb-2 text-[1em]'>Email: azedw@mail.com</p>
                <p className='font-normal text-[1em]'>Address: 22/1 natinoal city austria, dreem land, Huwai</p>
              </div>
            </div>
          </div>
          <div className='w-full mb-8 md:w-6/12 lg:w-3/12 lg:mb-0 lg:pl-20'>
            <div>
              <h2 className='font-medium text-[1.125em] mb-4 uppercase tracking-wider'>Company</h2>
              <ul>
                <li className='mb-3'>
                  <Link className='font-normal text-[1em]' to={'/'}>
                    Home
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='font-normal text-[1em]' to={'/about'}>
                    About
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='font-normal text-[1em]' to={'/products/all'} onClick={() => dispatch(setCategoryId(0))}>
                    Products
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='font-normal text-[1em]' to={'/contact'}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer