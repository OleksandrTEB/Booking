import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const hotelsApi = axios.create({
    baseURL: API_URL
});

export const getDestinations = async () => {
    const response = await hotelsApi.get('/destination');

    return response.data;
}

export const getHotels = async () => {
    const response = await hotelsApi.get('/hotels');

    return response.data;
}