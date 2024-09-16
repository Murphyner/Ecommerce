import { nanoid } from '@reduxjs/toolkit'
import BasketSummary from './BasketSummary'
import BasketCupon from './BasketCupon'
import { useSelector } from 'react-redux'
import BasketProductList from './BasketProductList'

function BasketDesktop() {

    const {basket} = useSelector(state => state.BasketSlice)

    // console.log(basket)
    return (
        <div className='pb-20'>
            <div className='flex flex-wrap'>
                <div className='w-7/12 xl:w-8/12 xl:pr-6'>
                    <div className='flex items-center border-b pb-3 border-[#6C7275]'>
                        <p className='w-5/12 font-semibold text-[1em]'>Product</p>
                        <p className='w-3/12 text-center font-semibold text-[1em]'>Quantity</p>
                        <p className='w-2/12 text-center font-semibold text-[1em]'>Price</p>
                        <p className='w-2/12 text-right font-semibold text-[1em]'>Subtotal</p>
                    </div>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <BasketProductList key={nanoid()} />
                    ))}
                </div>
                <div className='w-5/12 xl:w-4/12 pl-6'>
                    <BasketSummary />
                </div>
                <div className="w-4/12 pt-6">
                    <BasketCupon />
                </div>
            </div>
        </div>
    )
}

export default BasketDesktop