import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;
const BASE_URL = `https://${API_HOST}/api/v1/flights`;

// Create an Axios instance with default configurations
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
    },
});

export const searchAirports = async (query) => {
    try {
        const response = await apiClient.get('/searchAirport', {
            params: { query },
        });
        return response.data.data;
    } catch (error) {
        console.error(
            'Error fetching airport data:',
            error?.response?.data || error.message,
        );
        throw new Error(
            'Unable to fetch airport data. Please try again later.',
        );
    }
};

// Function to search for flights based on parameters
export const searchFlights = async (
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    date,
) => {
    try {
        const response = await apiClient.get('/searchFlights', {
            params: {
                originSkyId,
                destinationSkyId,
                originEntityId,
                destinationEntityId,
                date,
            },
        });
        return response.data;
    } catch (error) {
        console.error(
            'Error fetching flight data:',
            error?.response?.data || error.message,
        );
        throw new Error('Unable to fetch flight data. Please try again later.');
    }
};
