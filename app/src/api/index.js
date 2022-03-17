import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin ": "*",
        "Access-Control-Allow-Origin":"http://localhost:3001/v1/api/vehicle-recalls"

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
export function searchVehicleRecallsWithURL(baseURL, searchValue) {
    if (baseURL=="http://localhost:3001/v1/api/vehicle-recalls"){
        var searchparam="/?manufacturer_recall_no_txt="
        console.log("🚀 ~ file: index.js ~ line 29 ~ searchVehicleRecallsWithURL ~ searchparam", searchparam)
    }
    else{
         var searchparam="/search?value="

    }
    return axios.get(baseURL+searchparam+searchValue);
}