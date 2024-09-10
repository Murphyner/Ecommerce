import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { useEditBrandMutation, useGetBrandByIdQuery } from '../../../../store/api'
import { setEditBrandFlag } from '../../../../store/BrandModalSlice'

function EditBrandModal() {
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [slug, setSlug] = useState("")

    const { idBrand } = useSelector((state) => state.brandSlice)

    const { data } = useGetBrandByIdQuery(idBrand)

    const [editBrand, { data: responseData, isError, isSuccess, status }] = useEditBrandMutation()

    function handleEditBrand() {
        let id = idBrand
        let obj = { name, slug }
        editBrand({ id, obj })
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Uğurla icra olundu!!")
        }

        if (isError) {
            toast.error("Error")
        }

    }, [responseData, isError, isSuccess, status])

    useEffect(() => {
        if (data) {
            setName(data.name)
            setSlug(data.slug)
        }
    }, [data])

    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <ToastContainer />
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-2xl w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Edit Brand</h3>
                    <button onClick={() => dispatch(setEditBrandFlag(false))} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div className='p-5'>
                    <div className='flex items-center'>
                        <div className='w-6/12'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Brand Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Brand name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-6/12 px-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Brand Slug-name</label>
                            <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Brand slug-name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                    </div>
                </div>
                <div className="p-5 flex items-center border-gray-700 border-t">
                    <button onClick={handleEditBrand} className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Edit brand</button>
                </div>
            </div>
        </div>
    )
}

export default EditBrandModal