import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import InputRange from '../slider/InputRange'
import { useAllBrandQuery, useAllCategoryQuery } from '../../store/api'
import { eColors, eSize } from '../../enum/Enum'

function FilterComp() {
    const colors = eColors
    const size = eSize
    const [drop, setDrop] = useState(true)
    const [drop1, setDrop1] = useState(true)
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)
    const [drop4, setDrop4] = useState(false)
    const [value , setValue] = useState([0, 3000])
    const {data : category, isLoading : categoryLoad } = useAllCategoryQuery()
    const {data : brand, isLoading : brandLoad } = useAllBrandQuery()

    return (
        <ul>
            <li className='py-3 border-t border-[#EAEAE6]'>
                <div onClick={() => setDrop(!drop)} className='flex cursor-pointer justify-between items-center'>
                    <h2 className='font-semibold capitalize lg:text-[1.2em] text-[.925em]'>brand</h2>
                    <span>
                        <MdOutlineKeyboardArrowDown className={`${drop1 ? '' : 'rotate-180'} duration-300`} />
                    </span>
                </div>
                <div className={`${drop ? 'filter-drop-active' : 'filter-drop'}`}>
                    {!brandLoad && brand.map((item, index) => (
                        <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                            <input type="checkbox" className='cursor-pointer' />
                            <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </li>
            <li className='py-3 border-t border-[#EAEAE6]'>
                <div onClick={() => setDrop1(!drop1)} className='flex cursor-pointer justify-between items-center'>
                    <h2 className='font-semibold capitalize lg:text-[1.2em] text-[.925em]'>category</h2>
                    <span>
                        <MdOutlineKeyboardArrowDown className={`${drop1 ? '' : 'rotate-180'} duration-300`} />
                    </span>
                </div>
                <div className={`${drop1 ? 'filter-drop-active' : 'filter-drop'}`}>
                    {!categoryLoad && category.map((item, index) => (
                        <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                            <input type="checkbox" className='cursor-pointer' />
                            <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </li>
            <li className='py-3 border-t border-[#EAEAE6]'>
                <div onClick={() => setDrop2(!drop2)} className='flex cursor-pointer justify-between items-center'>
                    <h2 className='font-semibold capitalize lg:text-[1.2em] text-[.925em]'>colors</h2>
                    <span>
                        <MdOutlineKeyboardArrowDown className={`${drop2 ? '' : 'rotate-180'} duration-300`} />
                    </span>
                </div>
                <div className={`${drop2 ? 'filter-drop-active' : 'filter-drop'}`}>
                    {colors.map((item, index) => (
                        <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                            <span className={`${item.toLowerCase() === 'black' ? 'bg-black' : `bg-${item.toLowerCase()}-500` } block w-5 h-5 rounded-full shadow-md `}></span>
                            <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </li>
            <li className='py-3 border-t border-[#EAEAE6]'>
                <div onClick={() => setDrop3(!drop3)} className='flex cursor-pointer justify-between items-center'>
                    <h2 className='font-semibold capitalize lg:text-[1.2em] text-[.925em]'>discount</h2>
                    <span>
                        <MdOutlineKeyboardArrowDown className={`${drop3 ? '' : 'rotate-180'} duration-300`} />
                    </span>
                </div>
                <div className={`${drop3 ? 'filter-drop-active' : 'filter-drop'}`}>
                    <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                        <input type="checkbox" />
                        <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                            No discount
                        </span>
                    </div>
                </div>
            </li>
            <li className='py-3 border-t border-[#EAEAE6]'>
                <div onClick={() => setDrop4(!drop4)} className='flex cursor-pointer justify-between items-center'>
                    <h2 className='font-semibold capitalize lg:text-[1.2em] text-[.925em]'>sizes</h2>
                    <span>
                        <MdOutlineKeyboardArrowDown className={`${drop4 ? '' : 'rotate-180'} duration-300`} />
                    </span>
                </div>
                <div className={`${drop4 ? 'filter-drop-active' : 'filter-drop'}`}>
                    {size.map((item, index) => (
                        <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                            <input type="checkbox" className='cursor-pointer' />
                            <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </li>
            <li className='py-3 border-t border-[#EAEAE6]'>
                <div>
                    <h2 className='font-semibold lg:text-[1.2em] text-[.925em]'>Price</h2>
                </div>
                <div className='py-2 md:py-0 md:hidden flex'>
                    <div className='w-6/12 pr-3'>
                        <input type="text" placeholder='Min price' min={0} className=' block w-full rounded-md outline-none border px-3 py-2 border-[#2c2a27]' />
                    </div>
                    <div className='w-6/12 pl-3'>
                        <input type="text" placeholder='Max price' min={0} className=' block w-full rounded-md outline-none border px-3 py-2 border-[#2c2a27]' />
                    </div>
                </div>
                <div className='hidden md:block md:py-2'>
                    <InputRange value={value} setValue={setValue} />
                    <div className='flex justify-between items-center'>
                        <span>Min: {value[0]}</span>
                        <span>Max: {value[1]}</span>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <button className='bg-[#DC375F] text-white text-[0.875em] block w-full font-medium px-10 py-3 rounded-md'>Search</button>
                </div>
            </li>
        </ul>
    )
}

export default FilterComp