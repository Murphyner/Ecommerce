import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </>
    )
)