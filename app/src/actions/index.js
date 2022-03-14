import {
    fetchVehicleRecalls,
    getVehicleRecallsWithURL,
    postVehicleRecallsWithURL,
    searchVehicleRecallsWithURL
} from "../api";

export function fetchInitialVehicleRecalls() {
    console.log("fetchInitialVehicleRecalls")
    return dispatch => {
        fetchVehicleRecalls().then(resp => {
            console.log(resp.data)
            dispatch(fetchVehicleRecallsSucceeded(resp.data));
        })
    };
}

export function fetchVehicleRecallsSucceeded(data) {
    return {
        type: 'SUCCESS_GET_VEHICLE_RECALLS',
        payload: data,
    };
}

export function postVehicleRecalls(baseURL, data) {
    return dispatch => {
        postVehicleRecallsWithURL(baseURL, data).then(resp => {
            dispatch(fetchVehicleRecallsSucceeded(resp.data));
        })
    };
}
export function getVehicleRecalls(baseURL) {
    return dispatch => {
        getVehicleRecallsWithURL(baseURL).then(resp => {
            dispatch(fetchVehicleRecallsSucceeded(resp.data));
        })
    };
}

export function searchVehicleRecallsSucceeded(data) {
    return {
        type: 'SUCCESS_SEARCH_VEHICLE_RECALLS',
        payload: data,
    };
}

export function searchVehicleRecalls(baseURL, searchValue) {
    return dispatch => {
        searchVehicleRecallsWithURL(baseURL, searchValue).then(resp => {
            dispatch(searchVehicleRecallsSucceeded(resp.data));
        })
    };
}