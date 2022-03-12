import {fetchVehicleRecalls, postVehicleRecallsWithURL} from "../api";

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
    console.log(data)
    return {
        type: 'SUCCESS_GET_VEHICLE_RECALLS',
        payload: data,
    };
}

export function postVehicleRecalls(baseURL, data) {
    console.log("fetchInitialVehicleRecalls")
    return dispatch => {
        postVehicleRecallsWithURL(baseURL, data).then(resp => {
            console.log(resp.data)
            dispatch(fetchVehicleRecallsSucceeded(resp.data));
        })
    };
}

export function getVehicleRecalls({ baseURL }) {
    return {
        type: 'GET_VEHICLE_RECALLS',
        payload: {
            baseURL
        },
    };
}
export function searchVehicleRecalls({ baseURL, searchValue }) {
    return {
        type: 'SEARCH_VEHICLE_RECALLS',
        payload: {
            baseURL,
            searchValue
        },
    };
}