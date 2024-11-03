import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios(`${process.env.REACT_APP_API_URL}/products`);
        return response.data;
    } catch (error) {
        return error.message
    }
};