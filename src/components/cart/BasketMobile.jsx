import BasketSummary from './BasketSummary'
import BasketCupon from './BasketCupon'
import MobileBasketList from './MobileBasketList'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { setSum } from '../../store/BasketSlice'
import { Link } from 'react-router-dom'

function BasketMobile() {
    const [flag, setFlag] = useState(false)
    const { basket } = useSelector(state => state.BasketSlice)

    const dispatch = useDispatch()


    useEffect(() => {
        if (basket.length > 0) {
            setFlag(true)

            const total = basket.reduce((acc, item) => {
                return acc + ((item.product_id.price - item.product_id.discount) * item.count)
            }, 0)
            dispatch(setSum(total))
        } else {
            setFlag(false)
        }
    }, [basket])

    return (
        <div className='pt-6'>
            {flag ? (
                <div>
                    <h4 className='font-semibold text-[1em] text-[#121212] border-b border-[#6C7275] pb-3'>Product</h4>
                    <div>
                        <div className='mb-2'>
                            {basket.map((item) => (
                                <MobileBasketList key={nanoid()} item={item} />
                            ))}
                            <div className='mb-2'>
                                <BasketCupon />
                            </div>
                            <div className='pt-5'>
                                <BasketSummary />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='text-center mb-10'>
                    <p className='text-lg font-semibold mb-4'>Your basket is empty</p>
                    <Link to="/products/all" className="bg-[#DC375F] text-white py-2 px-4 rounded">
                        Go to Shop
                    </Link>
                </div>
            )}

        </div >
    )
}

export default BasketMobile