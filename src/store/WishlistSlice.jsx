import { createSlice } from "@reduxjs/toolkit";

export const WishlistSlice = createSlice({
    name : "WishlistSlice",
    initialState : {
        wishArr : []
    },
    reducers : {
        setWishArr : (state, action) => {
            const existingItem = state.wishArr.find((item) => item.id === action.payload.id) 

            if(existingItem){
                state.wishArr = state.wishArr.filter((item) => item.id !== action.payload.id)
            }else{
                state.wishArr = [...state.wishArr, action.payload]
            }
        }
    }
})

export const { setWishArr } = WishlistSlice.actions
export default WishlistSlice.reducer