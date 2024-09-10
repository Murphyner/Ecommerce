import React, { useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan, FaXmark } from 'react-icons/fa6'
import { useGetCategoryByIdQuery } from '../../store/api'
import { useSelector } from 'react-redux'

function SubCategoryList() {
    const [flag, setFlag] = useState(false)
    const [flagCheck, setFlagCheck] = useState(true)

    const { idCat } = useSelector((state) => state.categorySlice)

    const {data} = useGetCategoryByIdQuery(idCat)
    console.log(data)

    function handleEdit(){
        setFlagCheck(true)
    }

    return (
        <li className='border-b border-t border-gray-700 px-8 py-3'>
            <div className='flex items-center'>
                <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>1</span>
                <span className='text-left w-[30%] text-sm font-medium uppercase text-gray-400'>Lorem, ipsum.</span>
                <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>Lorem, ipsum.</span>
                <div className='text-left flex items-center gap-2 w-[35%] text-sm font-medium uppercase text-gray-400'>
                    <button onClick={() => setFlag(!flag)} className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        <FaRegEdit />
                        <span>Edit item</span>
                    </button>
                    <button className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-red-600 hover:bg-red-700 rounded-lg'>
                        <FaRegTrashCan />
                        <span>Delete item</span>
                    </button>
                </div>
            </div>
            {flag &&
                <div className='flex pt-5 items-center'>
                    <div className='w-3/12'>
                        <input placeholder='Sub-category name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                    </div>
                    <div className='w-3/12 px-3'>
                        <input placeholder='Sub-category slug-name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" /></div>
                    <div className='w-3/12 pr-3'>
                        <input disabled value={123} placeholder='Sub-category name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                    </div>
                    <div className='w-3/12'>
                        {flagCheck ? (
                            <button onClick={() => setFlagCheck(false)} className='flex items-center w-full justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                                <FaCheck />
                                <span>Save</span>
                            </button>
                        ) : (
                            <div className='flex rounded-lg overflow-hidden'>
                                <button onClick={() => setFlagCheck(true)} className='w-6/12 flex justify-center px-2 py-3 text-white bg-red-500'>
                                    <FaXmark />
                                </button>
                                <button onClick={handleEdit} className='w-6/12 flex justify-center px-2 py-3 text-white bg-green-500'>
                                    <FaCheck />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            }
        </li>
    )
}

export default SubCategoryList