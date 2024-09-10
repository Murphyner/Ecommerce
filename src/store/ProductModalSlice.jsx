import { createSlice } from "@reduxjs/toolkit";

export const ProductModalSlice = createSlice({
    name : "productModal",
    initialState : {
        addProductFlag : false,
        deleteProductFlag : false
    },
    reducers : {
        setAddProductFlag : (state, action) => {
            state.addProductFlag = action.payload
        },
        setDeleteProductFlag : (state, action) => {
            state.deleteProductFlag = action.payload
        }
    }
})

export const {setAddProductFlag, setDeleteProductFlag} = ProductModalSlice.actions
export default ProductModalSlice.reducer