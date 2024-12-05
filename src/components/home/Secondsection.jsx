import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img from '../../assets/banner1.jfif'
import TrendingBtns from '../static/TrendingBtns'
import ReactSlick from '../slider/ReactSlick'
import { useEffect, useRef, useState } from 'react'
import { useFilterProductQuery } from '../../store/api'

function Secondsection() {
    const sliderRef = useRef(null);

    const [arr, setArr] = useState([])

    const { data, isLoading } = useFilterProductQuery({
        page: 1,
        limit: 8,
        sortBy: 'price',
        sortOrder: 'asc',
        categoryId: 33,
    })

    useEffect(() => {
        if (!isLoading) {
            setArr(data.data)
        }
    }, [isLoading, data])

    return (
        <section className='py-10'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className="px-8 md:px-0 flex flex-wrap">
                    <div className='w-full lg:w-6/12 mb-4 lg:pr-3 relative'>
                        <div>
                            <img src={img} alt="" />
                            <div className='text-white absolute inset-0 p-2 sm:p-5 z-10'>
                                <h4 className='font-medium mb-2 text-[1em] sm:text-[1.3em] md:text-[1.5em] lg:text-[1.7em]'>Women's Collection</h4>
                                <div className='w-[50px] h-[2px] mb-2 bg-white'></div>
                                <h6 className='font-normal text-[0.875em] sm:text-[0.925em] md:text-[1em] lg:text-[1.2em]'>Save up to 20% off</h6>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mb-4 lg:w-6/12 lg:pl-3'>
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
                                <h2 className='font-medium text-[1.125em] xl:mb-5 lg:text-[1.5em] mb-2 text-center'>Trending Products</h2>
                                {/* <div className='flex items-center justify-center gap-5'>
                                    <TrendingBtns txt={'Featured'} />
                                    <TrendingBtns txt={'Latest'} />
                                    <TrendingBtns txt={'Bestseller'} />
                                </div> */}
                            </div>
                            <div className='pt-10'>
                                {!isLoading && <ReactSlick arr={arr} ref={sliderRef} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Secondsection