import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import AddBrandModal from '../../components/admin/modal/brand/AddBrandModal'
import { setAddBrandFlag } from '../../store/BrandModalSlice'
import { useAllBrandQuery } from '../../store/api'
import { nanoid } from '@reduxjs/toolkit'
import AdminBrandList from '../../components/admin/AdminBrandList'
import DeleteBrandModal from '../../components/admin/modal/brand/DeleteBrandModal'
import EditBrandModal from '../../components/admin/modal/brand/EditBrandModal'

function AdminBrands() {
    const {addBrandFlag, deleteBrandFlag, editBrandFlag} = useSelector((state) => state.brandSlice)
    const dispatch = useDispatch()

    const {data, isLoading} = useAllBrandQuery()

    return (
        <div className={`${isLoading ? "h-screen" : "py-5"}`}>
            {addBrandFlag && <AddBrandModal />}
            {deleteBrandFlag && <DeleteBrandModal />}
            {editBrandFlag && <EditBrandModal />}
            <div className='px-8 mb-8'>
                <h2 className='font-semibold text-white sm:text-2xl'>All Brands</h2>
            </div>
            <div className='flex justify-between items-center mb-10 px-8'>
                <div className='w-3/12'>
                    <input type="text" placeholder='Search for products' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' />
                </div>
                <div className='w-2/12 flex justify-end'>
                    <button onClick={() => dispatch(setAddBrandFlag(true))} className='relative flex gap-3 items-center px-4 justify-center py-3 text-center font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        <FaPlus />
                        <span className='flex items-stretch text-sm'>Add Brand</span>
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
                    {
                        !isLoading &&
                        data.map((item, i) => (
                            <AdminBrandList key={nanoid()} i={i} item={item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default AdminBrands