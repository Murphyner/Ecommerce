import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'
import { setEditProductFlag } from '../../../../store/ProductModalSlice'
import { eColors, eSize } from '../../../../enum/Enum'
import { useDispatch, useSelector } from 'react-redux'
import { useAllBrandQuery, useAllCategoryQuery, useGetCategoryByIdQuery, useGetProductByIdQuery, useUploadFileMutation } from '../../../../store/api'
import { setFlag, setProductBrandId, setProductCatId, setProductColors, setProductDescription, setProductDiscount, setProductImages, setProductName, setProductPrice, setProductSize, setProductSubCatId } from '../../../../store/AddProductSlice'
import { FaRegImage } from 'react-icons/fa'

function EditProductModal() {
    const rengler = eColors
    const olculer = eSize

    const dispatch = useDispatch()

    
    const { name, description, discount, price, id ,  images, flag, categoryId, subcategoryId, brandsId, colors, size } = useSelector((state) => state.addProduct)
    
    const { data: byCategory, isLoading: byCatLoad } = useGetCategoryByIdQuery(categoryId, { skip: categoryId.length === 0 });
    
    const { data: brands, isLoading: brandLoad } = useAllBrandQuery()
    
    const { data: categories, isLoading: categoryLoad } = useAllCategoryQuery()
    
    const [uploadFile, { data: response, isSuccess: uploadSuccess }] = useUploadFileMutation()

    const { data, isLoading} = useGetProductByIdQuery(id)

    console.log(data)

    function handleUploadImage(e) {
        const file = e.target.files[0]

        if (file) {
            const formData = new FormData()
            formData.append('image', file)
            uploadFile(formData)
        }
    }

    // function handleAddProduct() {
    //     let obj = {
    //         name,
    //         description,
    //         price,
    //         discount,
    //         images,
    //         categoryId,
    //         subcategoryId,
    //         brandsId,
    //         colors,
    //         size
    //     }
    //     addProduct(obj)
    // }

    useEffect(() => {
        if(data){
            dispatch(setProductName(data.name))
            dispatch(setProductDescription(data.description))
            dispatch(setProductPrice(data.price))
            dispatch(setProductDiscount(data.discount))
            dispatch(setProductImages(data.images))
            dispatch(setProductCatId(data.categoryId))
            dispatch(setProductSubCatId(data.subcategoryId))
            dispatch(setProductBrandId(data.brandsId))
            dispatch(setProductColors(data.Colors))
            dispatch(setProductSize(data.Size))
        }
    },[data])


    useEffect(() => {
        if (response) {
            dispatch(setProductImages(response.file.location))
        }
    }, [response])


    useEffect(() => {
        if (uploadSuccess) {
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

    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <ToastContainer />
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-2xl w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Add product</h3>
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
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Color</label>
                            <select onChange={(e) => dispatch(setProductColors(e.target.value))} value={colors} className='block w-full border outline-none border-gray-600 bg-gray-700 text-gray-400 p-2.5 text-sm rounded-lg'>
                                <option value="">Choose color</option>
                                {rengler.map((item, i) => (
                                    <option value={item} key={i}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-6/12 mb-3 pl-3'>
                            <label htmlFor="" className='text-white font-medium mb-2 text-sm block'>Size</label>
                            <select onChange={(e) => dispatch(setProductSize(e.target.value))} value={size} className='block w-full border outline-none border-gray-600 bg-gray-700 text-gray-400 p-2.5 text-sm rounded-lg'>
                                <option value="">Choose size</option>
                                {olculer.map((item, i) => (
                                    <option value={item} key={i}>{item}</option>
                                ))}
                            </select>
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
                                return <div key={i} className="h-20 w-20 overflow-hidden">
                                    <img src={item} className="w-full h-full" />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="p-5 flex items-center border-gray-700 border-t">
                    <button className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Add product</button>
                </div>
            </div>
        </div>
    )
}

export default EditProductModal