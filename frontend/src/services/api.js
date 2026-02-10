import axios from "axios";

const API_URL = "http://localhost:5000";
// const API_URL = "https://product-listing-app-ierb.onrender.com";

export const getProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const addProduct = (product) => {
  return axios.post(`${API_URL}/products`, product);
};


// src/api.js
// import axios from "axios";

// // Use your deployed backend URL here
// const API_URL = "https://your-live-backend.onrender.com"; // <— live backend

// export const getProducts = () => {
//   return axios.get(`${API_URL}/products`);
// };

// export const addProduct = (product) => {
//   return axios.post(`${API_URL}/products`, product);
// };
