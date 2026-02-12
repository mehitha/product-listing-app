import axios from "axios";


// const API_URL = "http://localhost:5000";
// const API_URL = "https://product-listing-app-1-utjy.onrender.com";
// const API_URL = "https://product-listing-tixc.onrender.com";

// const API_URL = "http://localhost:5000/api";
const API_URL = "https://product-listing-tixc.onrender.com/api";


axios.get(`${API_URL}/products`);



export const getProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const addProduct = (product) => {
  return axios.post(`${API_URL}/products`, product);
};
export const getAIRecommendations = async (productId) => {
    const response = await fetch(`/api/ai/recommendations/${productId}`);
    return await response.json();
};

// Smart Search
export const smartSearch = async (query) => {
    const response = await fetch('/api/ai/smart-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    return await response.json();
};

// Trending Products
export const getTrendingProducts = async () => {
    const response = await fetch('/api/ai/trending');
    return await response.json();
};

















// import axios from "axios";

// // Use Render URL for production
// const API_URL = "https://product-listing-tixc.onrender.com";

// // Get all products
// export const getProducts = () => {
//   return axios.get(`${API_URL}/api/products`);
// };

// // Add new product
// export const addProduct = (product) => {
//   return axios.post(`${API_URL}/api/products`, product);
// };