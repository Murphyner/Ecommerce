import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name : "BasketSlice",
    initialState : {
        basket : [],
        basketFlag : true
    },
    reducers : {
        setBasket : (state, action) => {
            state.basket = action.payload
        },
        setBasketFlag : (state, action) => {
            state.basketFlag = action.payload
        }
    }
})

export const { setBasket, setBasketFlag } = BasketSlice.actions
export default BasketSlice.reducer