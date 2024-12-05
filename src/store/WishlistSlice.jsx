import { createSlice } from '@reduxjs/toolkit';

const WishlistSlice = createSlice({
    name: 'WishlistSlice',
    initialState: {
        wishArr: JSON.parse(localStorage.getItem("wish")) || [], // localStorage ile başlat
    },
    reducers: {
        setWishArr: (state, action) => {
            // Ürünü wishArr'e ekler veya çıkartır
            const existingItem = state.wishArr.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.wishArr = state.wishArr.filter(item => item.id !== action.payload.id);
            } else {
                state.wishArr.push(action.payload);
            }
            // localStorage'ı güncelle
            localStorage.setItem("wish", JSON.stringify(state.wishArr));
        },
    },
});

export const { setWishArr } = WishlistSlice.actions;
export default WishlistSlice.reducer;
