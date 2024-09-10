import { configureStore } from "@reduxjs/toolkit";
import NumSlice from "./NumSlice";
import { api } from "./api";
import ProductModalSlice from "./ProductModalSlice";
import CategoryModalSlice from "./CategoryModalSlice";
import BrandModalSlice from "./BrandModalSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath] : api.reducer,
        number : NumSlice,
        productModal : ProductModalSlice,
        categorySlice : CategoryModalSlice,
        brandSlice : BrandModalSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})