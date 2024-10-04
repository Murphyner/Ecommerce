import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../../card.css'
import { useDispatch, useSelector } from 'react-redux'
import { setWishArr } from '../../store/WishlistSlice'
import { toast, ToastContainer } from 'react-toastify'

function ProductCard({ x, item }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { wishArr } = useSelector(state => state.WishlistSlice)

    const token = localStorage.getItem("token")

    const isInWishList = wishArr.some(wishItem => wishItem.id === item.id); 
    const [flag, setFlag] = useState(isInWishList); 

    let discount = 0

    if (item) {
        discount = ((item.discount / item.price) * 100).toFixed(0)
    }

    useEffect(() => {
        setFlag(isInWishList); 
    }, [isInWishList]);

    function handleAddWish() {
        if (!token) {
            toast.error("Please register")
            return;
        }
        dispatch(setWishArr(item)); 
        setFlag(!flag); 
    }

    return (
        <>
            <div className='py-2 card relative shadow-lg mb-4 rounded-lg overflow-hidden'>
                <div className='h-48 sm:h-56 card-img bg-[#F1F1F1] md:h-72 rounded-ss-lg rounded-se-lg flex flex-col justify-center lg:h-64 xl:h-72 overflow-hidden relative'>
                    <img className='h-full w-full card-first' src={item ? item.images[0] : img} alt="" />
                    <img className='h-full card-second' src={item ? item.images[1] : img} alt="" />
                    <ul className='absolute look duration-300 flex flex-col gap-2 xl:gap-4 z-10 top-[50%] translate-y-[-50%] right-[-50px]'>
                        <li>
                            <button
                                onClick={handleAddWish}
                                className='bg-white shadow-md h-8 w-8 xl:h-10 xl:w-10 flex justify-center items-center rounded-[50px]'>
                                {!flag ?
                                    <FaRegHeart /> :
                                    <FaHeart className={`text-red-600`} />}
                            </button>
                        </li>
                    </ul>
                    <div className={`absolute ${item?.discount ? 'flex' : 'hidden'} z-10 right-2 top-2 h-10 rounded-full p-1 items-center justify-center text-[0.875em] text-white w-10 bg-red-500`}>{discount} <span>&nbsp;</span> <span className='text-[0.775em]'>%</span> </div>
                </div>
                <div className='bg-[#333] px-2 xl:px-[14px] xl:py-1 rounded-md font-bold text-[0.7125em] xl:text-[1em] z-10 absolute top-4 left-2 text-white uppercase'>new</div>
                <div className='p-4'>
                    <div className='flex items-center mb-2 xl:mb-4 justify-center lg:justify-start'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            index < x ? <FaStar key={index} className='text-yellow-500' /> : <FaRegStar key={index} />
                        ))}
                    </div>
                    <h3 className='text-[0.875em] xl:text-[1em] mb-2 xl:mb-3 font-normal lg:text-start text-center'>{item ? item.name.slice(0, 27) : "Sleeveless Gown"}</h3>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                        <div className='flex items-center mb-2 gap-2'>
                            <p className={`text-center font-medium text-[0.875em] xl:text-[1em]  ${item?.discount ? 'line-through text-[0.775em] xl:text-[.9em] text-[#777]' : 'text-[#DC375F]'}`}>
                                $ {item ? item.price : "123"}
                            </p>
                            <p className={`text-center font-medium text-[0.875em] xl:text-[1em] text-[#DC375F]  ${item?.discount ? '' : 'hidden'}`}>
                                $ {item ? (item.price - item.discount).toFixed(2) : ''}
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                onClick={() => navigate(`/detail/${item.id}`)}
                                className='pb-[2px] xl:pb-0 xl:text-[1em] border-b-2 font-medium text-[0.75em] border-[#333333]'>View product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard