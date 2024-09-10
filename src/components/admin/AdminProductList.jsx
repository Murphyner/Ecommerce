import { FaRegEdit } from 'react-icons/fa'
import img from '../../assets/products1.jfif'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { setDeleteProductFlag } from '../../store/ProductModalSlice'

function AdminProductList() {
    const dispatch = useDispatch()
    return (
        <li className='flex items-center px-8 py-5 border-b border-gray-700'>
            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img className='w-full h-full' src={img} alt="image" />
                </div>
            </span>
            <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>Lorem, ipsum dolor.</span>
            <span className='text-left w-[20%] text-sm font-medium uppercase text-gray-400'>Lorem, ipsum.</span>
            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>100$</span>
            <span className='text-left w-[15%] text-sm font-medium uppercase text-gray-400'>10</span>
            <div className='flex items-center w-[20%] gap-2'>
                <button className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                    <FaRegEdit />
                    <span>Edit item</span>
                </button>
                <button onClick={() => dispatch(setDeleteProductFlag(true))} className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-red-600 hover:bg-red-700 rounded-lg'>
                    <FaRegTrashCan />
                    <span>Delete item</span>
                </button>
            </div>
        </li>
    )
}

export default AdminProductList