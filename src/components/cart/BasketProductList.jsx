import React, { useState } from 'react'
import { HiMiniMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { useDeleteCartMutation, useUpdateCartMutation } from '../../store/api'

function BasketProductList({ item }) {
    let element = item.product_id
    let man = 1

    const [count, setCount] = useState(item.count)

    const [deleteCart] = useDeleteCartMutation()

    const [updateCart] = useUpdateCartMutation()

    if (element.discount) {
        man = (element.price - element.discount).toFixed(2)
    } else {
        man = element.price
    }

    function handleCount(x) {
        if (count === 1 && x === -1) {
            return;
        } else {
            setCount(count + x);
            let productId = item.productId;
            updateCart({ productId, count: x })
        }
    }


    function handleDelete() {
        deleteCart(item.productId)
    }

    return (
        <div className='flex py-4 border-b border-[#E8ECEF]'>
            <div className='w-5/12'>
                <div className='flex justify-between lg:justify-start lg:gap-4'>
                    <div className='w-20 h-20'>
                        <img src={element.images[0]} alt="" className='w-full h-full' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h5 className='text-[0.875em] font-semibold'>{element.name.slice(0, 20)}</h5>
                        <p className='text-[#6C7275] text-[0.75em] font-normal'>Color: Black</p>
                        <button
                            onClick={handleDelete}
                            className='text-[#6C7275] flex items-center gap-2'>
                            <IoMdClose className='text-[1.1em]' />
                            <span className='text-[0.875em] font-semibold'>Remove</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-3/12'>
                <div className='flex justify-center'>
                    <div className='flex border border-[#6C7275] px-3 py-2 rounded items-center w-20 justify-between'>
                        <button
                            onClick={() => handleCount(-1)}
                            className='text-[#121212]'>
                            <HiMiniMinusSmall />
                        </button>
                        <span className='font-semibold text-[0.75em] text-[#121212]'>{count}</span>
                        <button
                            onClick={() => handleCount(1)}
                            className='text-[#121212]'>
                            <HiOutlinePlusSmall />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-2/12 flex justify-center'>
                <div className='text-[0.875em] flex flex-col text-[#121212] font-semibold'>
                    <span className={`${element.discount ? 'line-through text-[0.875em] xl:text-[.9em] text-[#777]' : 'text-[#DC375F]'}`}>
                        $ {element.price}
                    </span>
                    <span className={`${element.discount ? '' : 'hidden'} text-[#DC375F]`}>
                        $ {man}
                    </span>
                </div>
            </div>
            <div className='w-2/12 flex justify-end'>
                <div className='text-[0.875em] text-[#121212] font-semibold'>
                    $ {(count * man).toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default BasketProductList