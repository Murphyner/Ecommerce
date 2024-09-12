import { createSlice } from "@reduxjs/toolkit";

export const ProductModalSlice = createSlice({
    name : "productModal",
    initialState : {
        addProductFlag : false,
        deleteProductFlag : false,
        editProductFlag : false
    },
    reducers : {
        setAddProductFlag : (state, action) => {
            state.addProductFlag = action.payload
        },
        setDeleteProductFlag : (state, action) => {
            state.deleteProductFlag = action.payload
        },
        setEditProductFlag : (state, action) => {
            state.editProductFlag = action.payload
        }
    }
})

export const {setAddProductFlag, setDeleteProductFlag, setEditProductFlag} = ProductModalSlice.actions
export default ProductModalSlice.reducer