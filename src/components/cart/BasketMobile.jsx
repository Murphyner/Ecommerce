import BasketSummary from './BasketSummary'
import BasketCupon from './BasketCupon'
import MobileBasketList from './MobileBasketList'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { setSum } from '../../store/BasketSlice'

function BasketMobile() {
    const [flag, setFlag] = useState(false)
    const { basket} = useSelector(state => state.BasketSlice)

    const dispatch = useDispatch()


    useEffect(() => {
        if (basket.length > 0) {
            setFlag(true)

            const total = basket.reduce((acc, item) => {
                return acc + ((item.product_id.price - item.product_id.discount) * item.count)
            }, 0)
            dispatch(setSum(total))
        }
    }, [basket])

    return (
        <div className='pt-6'>
            <h4 className='font-semibold text-[1em] text-[#121212] border-b border-[#6C7275] pb-3'>Product</h4>
            <div>
                <div className='mb-2'>
                    {flag && 
                        basket.map((item) => (
                            <MobileBasketList key={nanoid()} item={item} />
                        ))
                    }
                </div>
                <div className='mb-2'>
                    <BasketCupon />
                </div>
                <div className='pt-5'>
                    <BasketSummary />
                </div>
            </div>
        </div>
    )
}

export default BasketMobile