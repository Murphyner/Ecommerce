import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { setAddCategoryFlag, setName, setSlug } from '../../../../store/CategoryModalSlice'
import { useAddCategoryMutation } from '../../../../store/api'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function AddCategoryModal() {
    const dispatch = useDispatch()
    const {name, slug} = useSelector((state) => state.categorySlice)
    const [addCategory, { isSuccess, isError }] = useAddCategoryMutation()

    function handleAddCategory() {
        if (name.length > 0 && slug.length > 0) {
            addCategory({ name, slug })
        }else{
            toast.info("Inputlar doldurulmayib")
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Ugurlu emeliyyat")
            dispatch(setName(''))
            dispatch(setSlug(''))
        }

        if (isError) {
            toast.error("Error")
        }
    }, [isSuccess, isError])


    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <ToastContainer />
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-2xl w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Add Category</h3>
                    <button onClick={() => dispatch(setAddCategoryFlag(false))} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div className='p-5'>
                    <div className='flex items-center'>
                        <div className='w-6/12 pr-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Category Name</label>
                            <input value={name} onChange={(e) => dispatch(setName(e.target.value))} placeholder='Category name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-6/12 pl-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Category Slug-name</label>
                            <input value={slug} onChange={(e) => dispatch(setSlug(e.target.value))} placeholder='Category slug-name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                    </div>
                </div>
                <div className="p-5 flex items-center border-gray-700 border-t">
                    <button onClick={handleAddCategory} className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Add category</button>
                </div>
            </div>
        </div>
    )
}

export default AddCategoryModal