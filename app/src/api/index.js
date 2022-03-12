import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function fetchVehicleRecalls() {
    return client.get('/vehicle-recalls');
}

export function postVehicleRecallsWithURL(baseURL, data) {
    return axios.post(baseURL, data);
}

export function getVehicleRecallsWithURL(baseURL) {
    return axios.get(baseURL);
}