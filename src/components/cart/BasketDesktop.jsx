import { nanoid } from '@reduxjs/toolkit'
import BasketSummary from './BasketSummary'
import BasketCupon from './BasketCupon'
import { useDispatch, useSelector } from 'react-redux'
import BasketProductList from './BasketProductList'
import { useEffect, useState } from 'react'
import { setSum } from '../../store/BasketSlice'
import { Link } from 'react-router-dom'

function BasketDesktop() {
    const [flag, setFlag] = useState(false)
    const { basket } = useSelector(state => state.BasketSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        if (basket.length > 0) {
            setFlag(true)

            const total = basket.reduce((acc, item) => {
                return (acc + ((item.product_id.price - item.product_id.discount) * item.count))
            }, 0)
            dispatch(setSum(total)) 
        } else {
            setFlag(false)
        }
    }, [basket])

    return (
        <div className='pb-20'>
            {flag ? (
                <div className='flex flex-wrap'>
                    <div className='w-7/12 xl:w-8/12 border-b border-black xl:pr-6'>
                        <div className='flex items-center border-b pb-3 border-[#6C7275]'>
                            <p className='w-5/12 font-semibold text-[1em]'>Product</p>
                            <p className='w-3/12 text-center font-semibold text-[1em]'>Quantity</p>
                            <p className='w-2/12 text-center font-semibold text-[1em]'>Price</p>
                            <p className='w-2/12 text-right font-semibold text-[1em]'>Subtotal</p>
                        </div>
                        {basket.map((item) => (
                            <BasketProductList item={item} key={nanoid()} />
                        ))}
                    </div>
                    <div className='w-5/12 xl:w-4/12 pl-6'>
                        <BasketSummary />
                    </div>
                    <div className="w-4/12 pt-6">
                        <BasketCupon />
                    </div>
                </div>
            ) : (
                <div className='text-center mt-10'>
                    <p className='text-lg font-semibold mb-4'>Your basket is empty</p>
                    <Link to="/products/all" className="bg-[#DC375F] text-white py-2 px-4 rounded">
                        Go to Shop
                    </Link>
                </div>
            )}
        </div>
    )
}

export default BasketDesktop
