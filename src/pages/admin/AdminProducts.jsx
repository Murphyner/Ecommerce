import React from 'react'
import { FaPlus } from 'react-icons/fa'
import AdminProductList from '../../components/admin/AdminProductList'
import { useDispatch, useSelector } from 'react-redux'
import { setAddProductFlag } from '../../store/ProductModalSlice'
import AddProductModal from '../../components/admin/modal/product/AddProductModal'
import DeleteProductModal from '../../components/admin/modal/product/DeleteProductModal'

function AdminProducts() {
    const dispatch = useDispatch()
    const { addProductFlag } = useSelector((state) => state.productModal)
    const { deleteProductFlag } = useSelector((state) => state.productModal)

    return (
        <div className='py-5'>
            {addProductFlag && <AddProductModal />}
            {deleteProductFlag && <DeleteProductModal />}
            <div className='px-8 mb-8'>
                <h2 className='font-semibold text-white sm:text-2xl'>All Products</h2>
            </div>
            <div className='flex justify-between items-center mb-10 px-8'>
                <div className='w-3/12'>
                    <input type="text" placeholder='Search for products' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' />
                </div>
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
                        <span className='text-left w-[20%] text-sm font-medium uppercase text-gray-400'>Brand</span>
                        <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>Price</span>
                        <span className='text-left w-[15%] text-sm font-medium uppercase text-gray-400'>Discount</span>
                        <span className='text-left w-[20%] text-sm font-medium uppercase text-gray-400'>Actions</span>
                    </li>
                    <AdminProductList />
                </ul>
            </div>
        </div>
    )
}

export default AdminProducts