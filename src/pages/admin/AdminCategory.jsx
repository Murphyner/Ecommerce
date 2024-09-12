import React from 'react'
import { FaPlus } from 'react-icons/fa'
import AdminCategoryList from '../../components/admin/AdminCategoryList'
import { useDispatch, useSelector } from 'react-redux'
import ShowSubCategoryModal from '../../components/admin/modal/category/ShowSubCategoryModal'
import { setAddCategoryFlag } from '../../store/CategoryModalSlice'
import { useAllCategoryQuery } from '../../store/api'
import { nanoid } from '@reduxjs/toolkit'
import DeleteCategoryModal from '../../components/admin/modal/category/DeleteCategoryModal'
import AddCategoryModal from '../../components/admin/modal/category/AddCategoryModal'
import EditCategoryModal from '../../components/admin/modal/category/EditCategoryModal'

function AdminCategory() {
    const {subCategoryModalFlag, addCategoryFlag, deleteCategoryFlag, editCategoryModalFlag} = useSelector((state) => state.categorySlice)
    const dispatch = useDispatch()
    const { data , isLoading } = useAllCategoryQuery()

    return (
        <div className='min-h-[100vh] py-5'>
            {subCategoryModalFlag && <ShowSubCategoryModal />}
            {addCategoryFlag && <AddCategoryModal />}
            {deleteCategoryFlag && <DeleteCategoryModal />}
            {editCategoryModalFlag && <EditCategoryModal />}
            <div className='flex justify-between items-center mb-10 px-8'>
                <h2 className='font-semibold text-white sm:text-2xl'>All Category</h2>
                <div className='w-2/12 flex justify-end'>
                    <button onClick={() => dispatch(setAddCategoryFlag(true))} className='relative flex gap-3 items-center px-4 justify-center py-3 text-center font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        <FaPlus />
                        <span className='flex items-stretch text-sm'>Add Category</span>
                    </button>
                </div>
            </div>
            <div>
                <ul>
                    <li className='bg-gray-700 flex items-center px-8 py-3'>
                        <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>#</span>
                        <span className='text-left w-[30%] text-sm font-medium uppercase text-gray-400'>Name</span>
                        <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>Slug name</span>
                        <span className='text-left w-[35%] text-sm font-medium uppercase text-gray-400'>Actions</span>
                    </li>
                    {!isLoading &&
                        data.map((item, i) => (
                            <AdminCategoryList i={i} item={item} key={nanoid()} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default AdminCategory