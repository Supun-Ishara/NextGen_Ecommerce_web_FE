// import axios from "axios";
// import { base_url, config } from "../../utils/axiosConfig";

// const getProducts = async () => {
//   const response = await axios.get(`${base_url}product`);
//   if (response.data) {
//     return response.data;
//   }
// };

// const addToWishlist = async (prodId) => {
//   const response = await axios.put(
//     `${base_url}product/wishlist`,
//     { prodId },
//     config
//   );
//   if (response.data) {
//     return response.data;
//   }
// };

// export const productService = {
//   getProducts,
//   addToWishlist,
// };


import { axiosInstance } from '../../utils/axiosConfig';

const getProducts = async () => {
  try {
    const response = await axiosInstance.get('product');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const addToWishlist = async (prodId) => {
  try {
    const response = await axiosInstance.put('product/wishlist', { prodId });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
};