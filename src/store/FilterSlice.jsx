import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
    name : "FilterSlice",
    initialState : {
        filterData : [],
        load : true,
        opacity : false,
        catId : 0
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
        }
    }
})

export const { setFilterData, setLoad, setOpacity, setCategoryId } = FilterSlice.actions
export default FilterSlice.reducer