import React, { useEffect, useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan, FaXmark } from 'react-icons/fa6'
import { useDeleteSubCategoryMutation, useEditSubCategoryMutation } from '../../store/api'
import { toast, ToastContainer } from 'react-toastify'

function SubCategoryList({ item, i, refetch }) {
    const [flag, setFlag] = useState(false)
    const [flagCheck, setFlagCheck] = useState(true)
    const [flagDel, setFlagDel] = useState(true)

    const [editSubCategory, { data, isSuccess, isError }] = useEditSubCategoryMutation()
    const [deleteSubCategory, {data: res, isSuccess: succ, isError: err}] = useDeleteSubCategoryMutation()

    const [name, setName] = useState(item.name)
    const [slug, setSlug] = useState(item.slug)

    function handleEdit() {
        let id = item.id
        let obj = {
            "name": name,
            "slug": slug,
            "categoryId": item.categoryId
        }
        editSubCategory({ id, obj })
    }

    function handleDelete(){
        deleteSubCategory(item.id)
    }

    useEffect(() => {
        if (succ) {
            toast.success("Uğurlu əməliyyat!", {
                autoClose: 500,
                onClose: () => refetch()
            })
        }
        if(err){
            toast.error("Error")
        }
    }, [res, succ, err])

    useEffect(() => {
        if (isSuccess) {
            setName(data?.name || name);
            setSlug(data?.slug || slug);
            toast.success("Uğurlu əməliyyat!", {
                autoClose: 500,
                onClose: () => refetch()
            });
            setFlag(false)
        }

        if(isError){
            toast.error("Error")
        }
    }, [data, isSuccess, isError])

    return (
        <li className='border-b border-t border-gray-700 px-8 py-3'>
            <ToastContainer />
            <div className='flex items-center'>
                <span className='text-left w-[10%] text-sm font-medium uppercase text-gray-400'>{i + 1}</span>
                <span className='text-left w-[30%] text-sm font-medium uppercase text-gray-400'>{item.name}</span>
                <span className='text-left w-[25%] text-sm font-medium uppercase text-gray-400'>{item.slug}</span>
                <div className='text-left flex items-center gap-2 w-[35%] text-sm font-medium uppercase text-gray-400'>
                    <button onClick={() => setFlag(!flag)} className='flex w-6/12 items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        <FaRegEdit />
                        <span>Edit item</span>
                    </button>
                    {flagDel ? (
                        <button onClick={() => setFlagDel(false)} className='flex w-6/12 items-center justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-red-600 hover:bg-red-700 rounded-lg'>
                            <FaRegTrashCan />
                            <span>Delete item</span>
                        </button>
                    ) : (
                        <div className='flex w-6/12 rounded-lg overflow-hidden'>
                            <button onClick={() => setFlagDel(true)} className='w-6/12 flex justify-center px-3 py-[11.4px] text-white bg-red-600'>
                                <FaXmark />
                            </button>
                            <button onClick={handleDelete} className='w-6/12 flex justify-center px-3 py-[11.4px] text-white bg-green-500'>
                                <FaCheck />
                            </button>
                        </div>
                    )}

                </div>
            </div>
            {flag &&
                <div className='flex pt-5 items-center'>
                    <div className='w-3/12'>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Sub-category name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                    </div>
                    <div className='w-3/12 px-3'>
                        <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Sub-category slug-name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" /></div>
                    <div className='w-3/12 pr-3'>
                        <input disabled value={item.id} placeholder='Sub-category name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                    </div>
                    <div className='w-3/12'>
                        {flagCheck ? (
                            <button onClick={() => setFlagCheck(false)} className='flex items-center w-full justify-center px-3 py-2 gap-2 text-sm font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg'>
                                <FaCheck />
                                <span>Save</span>
                            </button>
                        ) : (
                            <div className='flex rounded-lg overflow-hidden'>
                                <button onClick={() => setFlagCheck(true)} className='w-6/12 flex justify-center px-2 py-3 text-white bg-red-500'>
                                    <FaXmark />
                                </button>
                                <button onClick={handleEdit} className='w-6/12 flex justify-center px-2 py-3 text-white bg-green-500'>
                                    <FaCheck />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            }
        </li>
    )
}

export default SubCategoryList