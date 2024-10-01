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
import AccountAuth from "../components/auth/AccountAuth";
import Error from "../pages/Error";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/complete" element={<BasketComplete />} />
                <Route path="/account" element={
                    <AccountAuth>
                        <Account />
                    </AccountAuth>
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/all" element={<Products />} />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/detail/:id" element={<Detail />} />
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
            <Route path="*" element={<Error />} />
        </>
    )
)