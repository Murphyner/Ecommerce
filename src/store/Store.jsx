import { configureStore } from "@reduxjs/toolkit";
import NumSlice from "./NumSlice";

export const store = configureStore({
    reducer: {
        number : NumSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})