import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import AdminProductList from '../../components/admin/AdminProductList'
import { useDispatch, useSelector } from 'react-redux'
import { setAddProductFlag } from '../../store/ProductModalSlice'
import AddProductModal from '../../components/admin/modal/product/AddProductModal'
import DeleteProductModal from '../../components/admin/modal/product/DeleteProductModal'
import { useAllProductQuery, useFilterProductQuery } from '../../store/api'
import { nanoid } from '@reduxjs/toolkit'
import EditProductModal from '../../components/admin/modal/product/EditProductModal'
import { Pagination } from '@mui/material'

function AdminProducts() {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { addProductFlag, deleteProductFlag, editProductFlag } = useSelector((state) => state.productModal)

    const { data, isLoading } = useFilterProductQuery({
        page: page,
        limit: 10,
        sortBy: 'price',
        sortOrder: 'csa',
    })

    return (
        <div className='py-5 min-h-[100vh]'>
            {addProductFlag && <AddProductModal />}
            {deleteProductFlag && <DeleteProductModal />}
            {editProductFlag && <EditProductModal />}
            <div className='flex justify-between items-center mb-10 px-8'>
                <h2 className='font-semibold text-white sm:text-2xl'>All Products</h2>
                <div className='w-2/12 flex justify-end'>
                    <button onClick={() => dispatch(setAddProductFlag(true))} className='relative flex gap-3 items-center px-4 justify-center py-3 text-center font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        <FaPlus />
                        <span className='flex items-stretch text-sm'>Add Product</span>
                    </button>
                </div>
            </div>
            <div>
                <ul>
                    <li className='bg-gray-700 flex items-center px-8 py-3'>
                        <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>Image</span>
                        <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>Product Name</span>
                        <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>Brand</span>
                        <span className='text-left w-[15%] text-sm font-medium uppercase text-gray-400'>Category</span>
                        <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>Price</span>
                        <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>Discount</span>
                        <span className='text-left w-[20%] text-sm font-medium uppercase text-gray-400'>Actions</span>
                    </li>
                    {!isLoading &&
                        data.data.map((item, i) => (
                            <AdminProductList item={item} key={nanoid()} i={i} />
                        ))
                    }
                </ul>
                {!isLoading &&
                    <div className='flex justify-center pt-5'>
                        <Pagination
                            page={page}
                            onChange={(event, value) => setPage(value)}
                            count={Math.ceil(data.meta.totalProducts / 10)}
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: 'white',
                                },
                                '& .Mui-selected': {
                                    backgroundColor: 'white !important',
                                    color: '#000'
                                },
                            }}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminProducts