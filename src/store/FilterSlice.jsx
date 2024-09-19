import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
    name : "FilterSlice",
    initialState : {
        filterData : [],
        load : true
    },
    reducers : {
        setFilterData : (state, action) => {
            state.filterData = action.payload
        },
        setLoad : (state, action) => {
            state.load = action.payload
        }
    }
})

export const { setFilterData, setLoad } = FilterSlice.actions
export default FilterSlice.reducer