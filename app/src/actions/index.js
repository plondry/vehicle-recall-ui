import {fetchVehicleRecalls, getVehicleRecallsWithURL, postVehicleRecallsWithURL} from "../api";

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

export function searchVehicleRecalls({ baseURL, searchValue }) {
    return {
        type: 'SEARCH_VEHICLE_RECALLS',
        payload: {
        },
    };
}