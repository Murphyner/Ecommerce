import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { setDeleteProductFlag, setEditProductFlag } from '../../store/ProductModalSlice'
import { setId, setProductCatId } from '../../store/AddProductSlice'

function AdminProductList({item, i}) {
    const dispatch = useDispatch()

    function handleDel(){
        dispatch(setDeleteProductFlag(true))
        dispatch(setProductCatId(item.id))
    }

    function handleEdit(){
        dispatch(setEditProductFlag(true))
        dispatch(setId(item.id))
    }

    return (
        <li className='flex items-center px-8 py-5 border-b border-gray-700'>
            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img className='w-full h-full' src={item.images[0]} alt="image" />
                </div>
            </span>
            <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>{item.name}</span>
            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>{item.Brands.name}</span>
            <span className='text-left w-[15%] text-sm font-medium uppercase text-gray-400'>{item.category.name}</span>
            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>{item.price} $</span>
            <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>{item.discount}</span>
            <div className='flex items-center w-[20%] gap-2'>
                <button onClick={handleEdit} className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                    <FaRegEdit />
                    <span>Edit item</span>
                </button>
                <button onClick={handleDel} className='flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-red-600 hover:bg-red-700 rounded-lg'>
                    <FaRegTrashCan />
                    <span>Delete item</span>
                </button>
            </div>
        </li>
    )
}

export default AdminProductList