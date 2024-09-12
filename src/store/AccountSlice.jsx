import { createSlice } from "@reduxjs/toolkit";

export const AccountSlice = createSlice({
    name : "accountSlice",
    initialState : {
        arr : {}
    },
    reducers : {
        setArr : (state, action) => {
            state.arr = action.payload
        }
    }
})

export default AccountSlice.reducer
export const {setArr} = AccountSlice.actions