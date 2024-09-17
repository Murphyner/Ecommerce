import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name : "BasketSlice",
    initialState : {
        basket : [],
        basketFlag : true,
        summaryNum : 1,
        sum : 0,
        totalSum : 0
    },
    reducers : {
        setBasket : (state, action) => {
            state.basket = action.payload
        },
        setBasketFlag : (state, action) => {
            state.basketFlag = action.payload
        },
        setSummaryNum : (state, action) => {
            state.summaryNum = action.payload
        }, 
        setSum : (state,action) => {
            state.sum = action.payload
        },
        setTotalSum : (state,action) => {
            state.totalSum = action.payload
        }
    }
})

export const { setBasket, setBasketFlag, setSummaryNum, setSum, setTotalSum } = BasketSlice.actions
export default BasketSlice.reducer