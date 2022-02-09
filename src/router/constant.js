import { CartPage, CheckoutPage, HomePage, ProductPage } from "../pages";

export const ROUTES = {
  root: { component: HomePage, element: "/" },
  checkout: { component: CheckoutPage, element: "/checkout" },
  product: { component: ProductPage, element: "/product" },
  cart: { component: CartPage, element: "/cart" },
};
