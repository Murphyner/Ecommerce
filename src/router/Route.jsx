import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import BasketComplete from "../pages/BasketComplete";
import Account from "../pages/Account";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Detail from "../pages/Detail";
import Auth from "../components/auth/Auth";
import AdminLayout from "../layout/AdminLayout";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminCategory from "../pages/admin/AdminCategory";
import AdminBrands from "../pages/admin/AdminBrands";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/complete" element={<BasketComplete />} />
                <Route path="/account" element={<Account />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/detail" element={<Detail />} />
            </Route>
            <Route path="/admin" element={
                <Auth>
                    <AdminLayout />
                </Auth>
            }>
                <Route path="/admin" index element={<AdminProducts />} />
                <Route path="category" element={<AdminCategory />} />
                <Route path="brands" element={<AdminBrands />} />
            </Route>
        </>
    )
)