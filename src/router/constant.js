import { CartPage, CheckoutPage, HomePage, ProductPage } from "../pages";

export const ROUTES = {
  root: { Component: HomePage, element: "/" },
  checkout: { Component: CheckoutPage, element: "/checkout" },
  product: { Component: ProductPage, element: "/product" },
  cart: { Component: CartPage, element: "/cart" },
};
