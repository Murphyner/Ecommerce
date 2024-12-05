import { createSlice } from "@reduxjs/toolkit";

export const CategoryModalSlice = createSlice({
    name : "categorySlice",
    initialState : {
        subCategoryModalFlag : false,
        addCategoryFlag : false,
        deleteCategoryFlag : false,
        editCategoryModalFlag : false,
        idCat : '',
        name : '',
        slug : '',
        subName : '',
        subSlug : ''
    },
    reducers : {
        setSubCategoryModalFlag : (state, action) => {
            state.subCategoryModalFlag = action.payload
        },
        setAddCategoryFlag : (state, action) => {
            state.addCategoryFlag = action.payload
        },
        setDeleteCategoryFlag : (state, action) => {
            state.deleteCategoryFlag = action.payload
        },
        setEditCategoryFlag : (state, action) => {
            state.editCategoryModalFlag = action.payload
        },
        setIdCat : (state, action) => {
            state.idCat = action.payload
        },
        setName : (state, action) => {
            state.name = action.payload
        },
        setSlug : (state, action) => {
            state.slug = action.payload
        },
        setSubName : (state, action) => {
            state.subName = action.payload
        },
        setSubSlug : (state, action) => {
            state.subSlug = action.payload
        }
    }
})

export const {
    setSubCategoryModalFlag, 
    setAddCategoryFlag, 
    setDeleteCategoryFlag, 
    setEditCategoryFlag,
    setIdCat, 
    setName, 
    setSlug,
    setSubName,
    setSubSlug
} = CategoryModalSlice.actions

export default CategoryModalSlice.reducer