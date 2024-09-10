import { createSlice } from "@reduxjs/toolkit";

export const BrandModalSlice = createSlice({
    name : "brandSlice",
    initialState : {
        addBrandFlag : false,
        deleteBrandFlag : false,
        editBrandFlag : false,
        name : '',
        slug : '',
        idBrand : ''
    },
    reducers : {
        setAddBrandFlag : (state, action) => {
            state.addBrandFlag = action.payload
        },
        setDeleteBrandFlag : (state, action) => {
            state.deleteBrandFlag = action.payload
        },
        setEditBrandFlag : (state, action) => {
            state.editBrandFlag = action.payload
        },
        setName : (state, action) => {
            state.name = action.payload
        },
        setSlug : (state, action) => {
            state.slug = action.payload
        },
        setIdBrand : (state, action) => {
            state.idBrand = action.payload
        }
    }
})

export const {setAddBrandFlag, setDeleteBrandFlag, setEditBrandFlag, setName, setSlug, setIdBrand} = BrandModalSlice.actions
export default BrandModalSlice.reducer