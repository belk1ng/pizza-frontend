import { lazy } from "react";

export const Catalog = lazy(() => import("@pages/catalog"));
export const Cart = lazy(() => import("@pages/cart"));
export const Product = lazy(() => import("@pages/product"));
export const OrderSuccess = lazy(() => import("@pages/order-success"));
export const Login = lazy(() => import("@pages/auth/Login"));
export const Signup = lazy(() => import("@pages/auth/Signup"));
