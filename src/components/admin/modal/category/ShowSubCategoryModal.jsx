import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { setSubCategoryModalFlag, setSubName, setSubSlug } from '../../../../store/CategoryModalSlice'
import { useDispatch, useSelector } from 'react-redux'
import SubCategoryList from '../../SubCategoryList'
import { useAddSubCategoryMutation, useGetCategoryByIdQuery } from '../../../../store/api'
import { toast, ToastContainer } from 'react-toastify'
import { nanoid } from '@reduxjs/toolkit'

function ShowSubCategoryModal() {
    const dispatch = useDispatch()
    const { idCat, subName, subSlug } = useSelector((state) => state.categorySlice)

    const [addSubCategory, { data, isError, isLoading, isSuccess, status }] = useAddSubCategoryMutation()

    const { data: res, refetch } = useGetCategoryByIdQuery(idCat)

    useEffect(() => {
        if (isSuccess) {
            toast.success("uğurla əlavə olundu!!", {
                autoClose: 500,
                onClose: () => refetch()
            })
        }
        if (isError) {
            toast.error("Error!")
        }

    }, [data, isError, isLoading, isSuccess, status])

    function addSubCat() {
        const data = {
            "name": subName,
            "slug": subSlug,
            "categoryId": idCat
        }
        if (subName.length > 0 && subSlug.length > 0) {
            addSubCategory(data)
            dispatch(setSubName(''))
            dispatch(setSubSlug(''))
        } else {
            toast.info("İnputlar Boşdur!!")
        }
    }

    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <ToastContainer />
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-[780px] w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Sub-category</h3>
                    <button onClick={() => dispatch(setSubCategoryModalFlag(false))} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div className='py-5'>
                    <ul>
                        <li className='bg-gray-700 flex mb-5 items-center px-8 py-3'>
                            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>#</span>
                            <span className='text-left w-[30%] text-sm font-medium uppercase text-gray-400'>Name</span>
                            <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>Slug name</span>
                            <span className='text-left w-[35%] text-sm font-medium uppercase text-gray-400'>Actions</span>
                        </li>
                        {res?.Subcategory.map((item, i) => (
                            <SubCategoryList key={nanoid()} refetch={refetch} item={item} i={i} />
                        ))}
                    </ul>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-wrap py-3 mb-5'>
                        <div className='w-4/12 pr-3'>
                            <input value={subName} onChange={(e) => dispatch(setSubName(e.target.value))} placeholder='Sub-category name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-4/12'>
                            <input value={subSlug} onChange={(e) => dispatch(setSubSlug(e.target.value))} placeholder='Sub-category slug-name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-4/12 pl-3'>
                            <input type="text" className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' disabled value={idCat} />
                        </div>
                    </div>
                    <button onClick={addSubCat} className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Add sub-category</button>
                </div>
            </div>
        </div>
    )
}

export default ShowSubCategoryModal