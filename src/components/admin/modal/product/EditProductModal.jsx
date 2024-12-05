import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'
import { setEditProductFlag } from '../../../../store/ProductModalSlice'
import { eColors, eSize } from '../../../../enum/Enum'
import { useDispatch, useSelector } from 'react-redux'
import { useAllBrandQuery, useAllCategoryQuery, useEditProductMutation, useGetCategoryByIdQuery, useGetProductByIdQuery, useUploadFileMutation } from '../../../../store/api'
import { setFlag, setProductBrandId, setProductCatId, setProductDescription, setProductDiscount, setProductName, setProductPrice, setProductSubCatId } from '../../../../store/AddProductSlice'
import { FaRegImage } from 'react-icons/fa'
import { FiMinus } from 'react-icons/fi'

function EditProductModal() {
    const rengler = eColors
    const olculer = eSize

    const colorInput = useRef()
    const sizeInput = useRef()

    const dispatch = useDispatch()

    const [images, setImages] = useState([])
    const [size, setSize] = useState([])
    const [colors, setColors] = useState([])

    const { name, description, discount, price, id, flag, categoryId, subcategoryId, brandsId } = useSelector((state) => state.addProduct)

    const { data: byCategory, isLoading: byCatLoad } = useGetCategoryByIdQuery(categoryId, { skip: categoryId.length === 0 });

    const { data: brands, isLoading: brandLoad } = useAllBrandQuery()

    const { data: categories, isLoading: categoryLoad } = useAllCategoryQuery()

    const [uploadFile, { data: response, isSuccess: uploadSuccess }] = useUploadFileMutation()

    const { data, isLoading, refetch } = useGetProductByIdQuery(id)

    const [editProduct, { data: arr, isSuccess: arrSucc, isError: arrErr }] = useEditProductMutation()

    function handleUploadImage(e) {
        const file = e.target.files[0]

        if (file) {
            const formData = new FormData()
            formData.append('image', file)
            uploadFile(formData)
        }
    }

    function handleEdit() {
        let obj = {
            name,
            description,
            price,
            discount,
            images,
            categoryId,
            subcategoryId,
            brandsId,
            colors,
            size
        }
        editProduct({ id, obj })
    }

    useEffect(() => {
        if (arrSucc) {
            toast.success("Uğurlu əməliyyat!", {
                onClose: () => refetch()
            })
        }

        if (arrErr) {
            toast.error("Error!")
        }
    }, [arrSucc, arrErr])

    useEffect(() => {
        if (data) {
            console.log(data)
            dispatch(setProductName(data.name))
            dispatch(setProductDescription(data.description))
            dispatch(setProductPrice(data.price))
            dispatch(setProductDiscount(data.discount))
            setImages(data.images)
            dispatch(setProductCatId(data.categoryId))
            dispatch(setProductSubCatId(data.subcategoryId))
            dispatch(setProductBrandId(data.brandsId))
            setColors(data.Colors)
            setSize(data.Size)
        }
    }, [data])


    useEffect(() => {
        if (uploadSuccess) {
            setImages([...images, response.file.location])
            toast.success("Şəkil uğurla əlavə olundu!")
        }
    }, [uploadSuccess])

    useEffect(() => {
        if (byCategory?.Subcategory.length > 0) {
            dispatch(setFlag(false))
        } else {
            dispatch(setFlag(true))
        }
    }, [byCategory])

    function handleColorChange(checked, value) {
        if (colors.includes(value)) {
            const arr = colors.filter((item) => item !== value)
            setColors(arr)
            colorInput.current.checked = false
            return
        }

        if (checked) {
            setColors([...colors, value])
        }
    }

    function handleSizeChange(checked, value) {
        if (size.includes(value)) {
            const arr = size.filter((item) => item !== value)
            setSize(arr)
            sizeInput.current.checked = false
            return
        }

        if (checked) {
            setSize([...size, value])
        }
    }

    function handleDeleteImage(index) {
        const newImages = images?.filter((_, i) => i !== index)
        setImages(newImages)
    }

    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <ToastContainer />
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-2xl w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Edit product</h3>
                    <button onClick={() => dispatch(setEditProductFlag(false))} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div className="p-5 max-h-[70dvh] overflow-y-auto">
                    <div className='flex flex-wrap items-center'>
                        <div className='w-6/12 mb-3 pr-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Name</label>
                            <input onChange={(e) => dispatch(setProductName(e.target.value))} value={name} placeholder='Product name...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-6/12 mb-3 pl-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Discount</label>
                            <input onChange={(e) => dispatch(setProductDiscount(e.target.value))} value={discount} placeholder='Product discount...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-6/12 mb-3 pr-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Price</label>
                            <input onChange={(e) => dispatch(setProductPrice(e.target.value))} value={price} placeholder='Product Price...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg' type="text" />
                        </div>
                        <div className='w-6/12 mb-3 pl-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Brand</label>
                            <select onChange={(e) => dispatch(setProductBrandId(e.target.value))} value={brandsId} className='block w-full border outline-none border-gray-600 bg-gray-700 text-gray-400 p-2.5 text-sm rounded-lg'>
                                <option value="">Choose brand id</option>
                                {!brandLoad &&
                                    brands.map((item, i) => (
                                        <option key={i} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='w-6/12 mb-3 pr-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Category</label>
                            <select onChange={(e) => dispatch(setProductCatId(e.target.value))} value={categoryId} className='block w-full border outline-none border-gray-600 bg-gray-700 text-gray-400 p-2.5 text-sm rounded-lg'>
                                <option value="">Choose category id</option>
                                {!categoryLoad &&
                                    categories.map((item, i) => (
                                        <option key={i} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='w-6/12 mb-3 pl-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Sub-Category</label>
                            <select onChange={(e) => dispatch(setProductSubCatId(e.target.value))} value={subcategoryId} disabled={flag} className='block w-full border outline-none border-gray-600 bg-gray-700 text-gray-400 p-2.5 text-sm rounded-lg'>
                                <option value="">Choose sub-category id</option>
                                {!byCatLoad &&
                                    byCategory?.Subcategory.map((item, i) => (
                                        <option key={i} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='w-6/12 mb-3 pr-3'>
                            <p className='text-white font-medium mb-2 text-sm block'>Colors</p>
                            <div className="flex border p-2 h-[100px] border-gray-600 rounded-lg flex-wrap gap-2 items-center">
                                {rengler.map((item, i) => (
                                    <div className="flex gap-1 items-center" key={i}>
                                        <input
                                            ref={colorInput}
                                            checked={colors.includes(item)}
                                            onChange={(e) => handleColorChange(e.target.checked, item)}
                                            type="checkbox"
                                            value={item}
                                            name={item} />
                                        <label className="text-white text-sm" htmlFor={item}>{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-6/12 mb-3 pl-3'>
                            <p className='text-white font-medium mb-2 text-sm block'>Size</p>
                            <div className="flex flex-col border p-2 border-gray-600 h-[100px] rounded-lg flex-wrap gap-2 ">
                                {olculer.map((item, i) => (
                                    <div className="flex gap-1 items-center" key={i}>
                                        <input
                                            ref={sizeInput}
                                            checked={size.includes(item)}
                                            onChange={(e) => handleSizeChange(e.target.checked, item)}
                                            type="checkbox"
                                            value={item}
                                            name={item} />
                                        <label className="text-white text-sm" htmlFor={item}>{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full mb-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Description</label>
                            <textarea onChange={(e) => dispatch(setProductDescription(e.target.value))} value={description} rows={5} placeholder='Product description...' className='block w-full border outline-none border-gray-600 bg-gray-700 text-white placeholder-gray-400 p-2.5 text-sm rounded-lg'></textarea>
                        </div>
                        <div className='w-full mb-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Upload Image</label>
                            <div className="file-upload-wrapper">
                                <div className="content">
                                    <FaRegImage className="text-[2em]" />
                                    <span>Drop images here</span>
                                </div>
                                <input onChange={handleUploadImage} type="file" accept="image/*" id="fileInput" className="file-upload-field" />
                            </div>
                        </div>
                        <div className="w-full flex gap-3">
                            {images?.map((item, i) => {
                                return (
                                    <div key={i} className="relative h-20 w-20">
                                        <img src={item} className="w-full h-full" />
                                        <button
                                            onClick={() => handleDeleteImage(i)}
                                            className="absolute top-[-5px] right-[-5px] bg-red-500 text-white rounded-full">
                                            <FiMinus />
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="p-5 flex items-center border-gray-700 border-t">
                    <button onClick={handleEdit} className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Edit product</button>
                </div>
            </div>
        </div>
    )
}

export default EditProductModal