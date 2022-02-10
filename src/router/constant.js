import {
  CartPage,
  CheckoutPage,
  HomePage,
  ProductPage,
  AboutPage,
  ContactPage,
} from "../pages";

export const ROUTES = {
  root: { Component: HomePage, element: "/" },
  cart: { Component: CartPage, element: "/cart" },
  about: { Component: AboutPage, element: "/about" },
  contact: { Component: ContactPage, element: "/contact" },
  product: { Component: ProductPage, element: "/product" },
  checkout: { Component: CheckoutPage, element: "/checkout" },
};
