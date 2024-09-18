import { createSlice } from "@reduxjs/toolkit";

export const AccountSlice = createSlice({
    name : "accountSlice",
    initialState : {
        arr : {},
        img : ''
    },
    reducers : {
        setArr : (state, action) => {
            state.arr = action.payload
        },
        setImg : (state, action) => {
            state.img = action.payload
        }
    }
})

export default AccountSlice.reducer
export const {setArr, setImg} = AccountSlice.actions