// frontend/src/api/api.js
import axios from 'axios';

// Base API URL
const API_URL = process.env.REACT_APP_API_URL;

// Axios instance to configure headers, base URL, etc.
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API Calls

// User registration
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User login
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/login', credentials);
    return response.data; // Returns JWT token
  } catch (error) {
    throw error.response.data;
  }
};

// Get all menu items
export const fetchMenuItems = async () => {
  try {
    const response = await axiosInstance.get('/menu');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Place an order
export const placeOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post('/order', orderData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
