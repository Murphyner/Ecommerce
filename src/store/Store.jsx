import { configureStore } from "@reduxjs/toolkit";
import NumSlice from "./NumSlice";
import { api } from "./api";
import ProductModalSlice from "./ProductModalSlice";
import CategoryModalSlice from "./CategoryModalSlice";
import BrandModalSlice from "./BrandModalSlice";
import AddProductSlice from "./AddProductSlice";
import AccountSlice from "./AccountSlice";
import BasketSlice from "./BasketSlice";
import FilterSlice from "./FilterSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath] : api.reducer,
        number : NumSlice,
        productModal : ProductModalSlice,
        categorySlice : CategoryModalSlice,
        brandSlice : BrandModalSlice,
        addProduct : AddProductSlice,
        accountSlice : AccountSlice,
        BasketSlice : BasketSlice,
        FilterSlice : FilterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})