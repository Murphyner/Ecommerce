import { createSlice } from "@reduxjs/toolkit";

export const AddProductSlice = createSlice({
    name : "addProduct",
    initialState : {
        name : '',
        description : '',
        discount: '',
        price: '',
        images: [],
        categoryId: '',
        subcategoryId: '',
        brandsId: '',
        colors: [],
        size: [],
        flag : true,
        id : ''
    },
    reducers : {
        setProductName : (state, action) => {
            state.name = action.payload
        },
        setProductDescription : (state, action) => {
            state.description = action.payload
        },
        setProductDiscount : (state, action) => {
            state.discount = action.payload
        },
        setProductPrice : (state, action) => {
            state.price = action.payload
        },
        setProductImages : (state, action) => {
            state.images = [...state.images, action.payload]
        },
        resetProductImages : (state, action) => {
            state.images = action.payload
        },
        setProductCatId : (state, action) => {
            state.categoryId = action.payload
        },
        setProductSubCatId : (state, action) => {
            state.subcategoryId = action.payload
        },
        setProductBrandId : (state, action) => {
            state.brandsId = action.payload
        },
        setProductColors : (state, action) => {
            state.colors = [...state.colors, action.payload]
        },
        deleteProductColors : (state, action) => {
            state.colors = state.colors.filter(item => item !== action.payload)
        },
        setProductSize : (state, action) => {
            state.size = [...state.size, action.payload]
        },
        deleteProductSize : (state, action) => {
            state.size = state.size.filter(item => item !== action.payload)
        },
        setFlag : (state, action) => {
            state.flag = action.payload
        },
        setId : (state, action) => {
            state.id = action.payload
        }
    }
})

export default AddProductSlice.reducer
export const {
    setProductBrandId,
    setProductCatId,
    setProductColors,
    deleteProductColors,
    setProductDescription,
    setProductDiscount,
    setProductImages,
    setProductName,
    setProductPrice,
    setProductSize,
    deleteProductSize,
    setProductSubCatId,
    resetProductImages,
    setFlag,
    setId
} = AddProductSlice.actions