import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
    name : "FilterSlice",
    initialState : {
        filterData : [],
        load : true,
        opacity : false,
        catId : 0,
        page : 1,
        totalProduct : 1
    },
    reducers : {
        setFilterData : (state, action) => {
            state.filterData = action.payload
        },
        setLoad : (state, action) => {
            state.load = action.payload
        },
        setOpacity : (state, action) => {
            state.opacity = action.payload
        },
        setCategoryId : (state, action) => {
            state.catId = action.payload
        },
        setPage : (state, action) => {
            state.page = action.payload
        },
        setTotalProduct : (state,action) => {
            state.totalProduct = action.payload
        }
    }
})

export const { setFilterData, setLoad,setTotalProduct, setOpacity, setCategoryId, setPage } = FilterSlice.actions
export default FilterSlice.reducer