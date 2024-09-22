import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import InputRange from '../slider/InputRange'
import { useAllBrandQuery, useAllCategoryQuery, useFilterProductQuery } from '../../store/api'
import { eColors, eSize } from '../../enum/Enum'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterData, setLoad, setOpacity } from '../../store/FilterSlice'
import FilterColor from './FilterColor'
import FilterSize from './FilterSize'

function FilterComp() {
    const colors = eColors
    const size = eSize
    const [drop, setDrop] = useState(true)
    const [drop1, setDrop1] = useState(true)
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)
    const [drop4, setDrop4] = useState(false)
    const [value, setValue] = useState([0, 100000])
    const [brandId, setBrandId] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [discount, setDiscount] = useState(false)
    const [filterColor, setFilterColor] = useState([])
    const [filterSize, setFilterSize] = useState([])

    const { data: category, isLoading: categoryLoad } = useAllCategoryQuery()
    const { data: brand, isLoading: brandLoad } = useAllBrandQuery()

    const dispatch = useDispatch()

    const {catId} = useSelector(state => state.FilterSlice)

    useEffect(() => {
        if(catId){
            setCategoryId(catId)
        }
    }, [catId])

    const { data, isLoading, isFetching } = useFilterProductQuery({
        page: 1,
        limit: 20,
        sortBy: 'price',
        sortOrder: 'asc',
        categoryId: categoryId ? categoryId : '',
        brandId: brandId ? brandId : '',
        color: filterColor.length > 0 ? filterColor : '', 
        size: filterSize.length > 0 ? filterSize : '',  
        minPrice: value[0],
        maxPrice: value[1],
        discount: discount ? discount : ''
    })

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(setFilterData(data.data));
            dispatch(setLoad(isLoading));
            dispatch(setOpacity(isFetching))
        }
    }, [data, isLoading, isFetching]);

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
                    <div className='flex mb-2 items-center gap-2'>
                        <input
                            checked={brandId === ''}
                            onChange={() => setBrandId('')}
                            type="checkbox"
                            className='cursor-pointer' />
                        <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                            All
                        </span>
                    </div>
                    {!brandLoad && brand.map((item, index) => (
                        <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                            <input
                                checked={brandId === item.id}
                                onChange={() => setBrandId(item.id)}
                                type="checkbox"
                                className='cursor-pointer' />
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
                    <div className='flex mb-2 items-center gap-2'>
                        <input
                            checked={categoryId === ""}
                            onChange={() => setCategoryId('')}
                            type="checkbox"
                            className='cursor-pointer' />
                        <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                            All
                        </span>
                    </div>
                    {!categoryLoad && category.map((item, index) => (
                        <div key={nanoid()} className='flex mb-2 items-center gap-2'>
                            <input
                                checked={categoryId === item.id}
                                onChange={() => setCategoryId(item.id)}
                                type="checkbox"
                                className='cursor-pointer' />
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
                        <FilterColor filterColor={filterColor} setFilterColor={setFilterColor} item={item} key={nanoid()} />
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
                    <div className='flex mb-2 items-center gap-2'>
                        <input
                            checked={discount === false}
                            onChange={() => setDiscount(false)}
                            type="checkbox" />
                        <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                            All
                        </span>
                    </div>
                    <div className='flex mb-2 items-center gap-2'>
                        <input
                            checked={discount}
                            onChange={() => setDiscount(true)}
                            type="checkbox" />
                        <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                            With discount
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
                        <FilterSize setFilterSize={setFilterSize} filterSize={filterSize} key={nanoid()} item={item} />
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
                        <p><span className='font-bold'>Min: </span>{value[0]}</p>
                        <p><span className='font-bold'>Max: </span>{value[1]}</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default FilterComp