import axios from "axios";
const BASE_URL = "https://fakestoreapi.com/products";

const getProduct = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
export { getProduct };
