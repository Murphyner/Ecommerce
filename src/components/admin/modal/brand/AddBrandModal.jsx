import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { setAddBrandFlag, setName, setSlug } from '../../../../store/BrandModalSlice'
import { useAddBrandMutation } from '../../../../store/api'
import { toast, ToastContainer } from 'react-toastify'

function AddBrandModal() {
    const dispatch = useDispatch()
    const {name, slug} = useSelector((state) => state.brandSlice)

    const [addBrand, {data, isError, isSuccess, isLoading, status}] = useAddBrandMutation()

    function handleAddBrand(){
        let obj = {name, slug}

        if(name.length > 0 && slug.length > 0){
            addBrand(obj)
            dispatch(setName(''))
            dispatch(setSlug(''))
        }else{
            toast.info("Inputlar doldurulmayıb!!")
        }
    }

    useEffect(() => {
        if(isSuccess){
            toast.success("Uğurla əlavə olundu!!")
        }

        if(isError){
            toast.error("Error")
        }

    },[data, isError, isSuccess, isLoading, status])

    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <ToastContainer />
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-2xl w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Add Brand</h3>
                    <button onClick={() => dispatch(setAddBrandFlag(false))} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div className='p-5'>
                    <div className='flex items-center'>
                        <div className='w-6/12 pr-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Brand Name</label>
                            <input onChange={(e) => dispatch(setName(e.target.value))} value={name} placeholder='Brand name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-6/12 pl-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Brand Slug-name</label>
                            <input onChange={(e) => dispatch(setSlug(e.target.value))} value={slug} placeholder='Brand slug-name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                    </div>
                </div>
                <div className="p-5 flex items-center border-gray-700 border-t">
                    <button onClick={handleAddBrand} className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Add brand</button>
                </div>
            </div>
        </div>
    )
}

export default AddBrandModal