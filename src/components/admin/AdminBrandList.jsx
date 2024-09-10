import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { setDeleteBrandFlag, setEditBrandFlag, setIdBrand } from '../../store/BrandModalSlice'

function AdminBrandList({item, i}) {
    const dispatch = useDispatch()

    function handleDelete(){
        dispatch(setDeleteBrandFlag(true))
        dispatch(setIdBrand(item.id))
    }

    function handleEdit(){
        dispatch(setEditBrandFlag(true))
        dispatch(setIdBrand(item.id))
    }

    return (
        <li className='px-8 pt-5 pb-1 border-b border-gray-700'>
            <div className="flex mb-5 items-center">
                <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>{i + 1}</span>
                <span className='text-left w-[30%] text-sm font-medium uppercase text-gray-400'>{item.name}</span>
                <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>{item.slug}</span>
                <div className='flex w-[35%] items-center gap-2'>
                    <button onClick={handleEdit} className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        <FaRegEdit />
                        <span>Edit item</span>
                    </button>
                    <button onClick={handleDelete} className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-red-600 hover:bg-red-700 rounded-lg'>
                        <FaRegTrashCan />
                        <span>Delete item</span>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default AdminBrandList