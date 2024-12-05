import React, {  useState } from 'react'
import { HiMiniMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { useDeleteCartMutation, useUpdateCartMutation } from '../../store/api' 

function MobileBasketList({ item }) {
    const [count, setCount] = useState(item.count)

    let man = 0

    const [updateCart, {isLoading}] = useUpdateCartMutation()

    if(item.product_id.discount){
        man = (item.product_id.price - item.product_id.discount).toFixed(2)
    }else{
        man = item.product_id.price
    }

    const [deleteCart] = useDeleteCartMutation()

    async function handleDelete(){
        await deleteCart(item.id)
    }

    function handleChange(x){
        if(count === 1 && x === -1){
            return
        }else{
            setCount(count + x)
            let productId = item.productId;
            updateCart({ productId, count: (count + x)})
        }
    }

    return (
        <div className='flex py-4 border-b border-[#E8ECEF]'>
            <div className='w-3/12'>
                <div className='w-20 h-20'>
                    <img src={item.product_id.images[0]} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className='w-6/12 px-3'>
                <div className='flex gap-2 flex-col'>
                    <h5 className='text-[0.875em] font-semibold'>{item.product_id.name}</h5>
                    <p className='text-[#6C7275] text-[0.75em] capitalize font-normal'>Color: {item.Color.toLowerCase()}</p>
                    <p className='text-[#6C7275] text-[0.75em] capitalize font-normal'>Color: {item.Size.toLowerCase()}</p>
                    <div className='flex border border-[#6C7275] px-3 py-2 rounded items-center w-20 justify-between'>
                        <button 
                        onClick={() => handleChange(-1)}
                        className={`text-[#121212] ${isLoading && 'cursor-not-allowed'}`}>
                            <HiMiniMinusSmall />
                        </button>
                        <span className='font-semibold text-[0.75em] text-[#121212]'>{count}</span>
                        <button 
                        onClick={() => handleChange(1)}
                        className={`text-[#121212] ${isLoading && 'cursor-not-allowed'}`}>
                            <HiOutlinePlusSmall />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-3/12 flex justify-end'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[0.875em] text-[#121212] font-semibold'>$ {(count * man).toFixed(2)}</span>
                    <button 
                    onClick={handleDelete}
                    className='text-[#6C7275] flex justify-end'>
                        <IoMdClose className='text-[1.1em]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileBasketList