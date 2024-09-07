import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img from '../assets/banner3.jfif'
import ReactSlick from './ReactSlick'
import { useRef } from 'react'

function FiveSection() {
    const sliderRef = useRef(null);

    return (
        <section className='py-10'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className="px-8 md:px-0 flex items-center flex-wrap">
                    <div className='w-full lg:w-6/12 mb-4 lg:pl-3 lg:order-1 relative'>
                        <div>
                            <img src={img} alt="" />
                            <div className='text-white absolute inset-0 p-2 sm:p-5 lg:pl-10 z-10'>
                                <h4 className='font-medium mb-2 text-[1em] sm:text-[1.3em] md:text-[1.5em] lg:text-[1.7em]'>Women's Collection</h4>
                                <div className='w-[50px] h-[2px] mb-2 bg-white'></div>
                                <h6 className='font-normal text-[0.875em] sm:text-[0.925em] md:text-[1em] lg:text-[1.2em]'>Save up to 20% off</h6>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mb-4 lg:w-6/12 lg:pr-3'>
                        <div>
                            <div className='mb-2 relative xl:mb-5'>
                                <button
                                    className='absolute border-2 text-[#333333] border-[#EEEEEE] h-10 w-10 flex items-center justify-center rounded-[50px] left-2 top-[50%] translate-y-[-50%]'
                                    onClick={() => sliderRef.current.slickPrev()} >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    className='absolute border-2 text-[#333333] border-[#EEEEEE] h-10 w-10 flex items-center justify-center rounded-[50px] right-2 top-[50%] translate-y-[-50%]'
                                    onClick={() => sliderRef.current.slickNext()}>
                                    <FaChevronRight />
                                </button>
                                <h2 className='font-medium text-[1.125em] xl:mb-5 lg:text-[1.5em] mb-2 text-center'>Special Products</h2>
                            </div>
                            <div>
                                <ReactSlick ref={sliderRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FiveSection