import { createSlice } from "@reduxjs/toolkit";

export const NumSlice = createSlice({
    name : "number",
    initialState : {
        num : 1
    },
    reducers : {
        setNum : (state, action) => {
            state.num = action.payload
        }
    }
})

export const {setNum} = NumSlice.actions
export default NumSlice.reducer