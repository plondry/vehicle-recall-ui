import {
    getVehicleRecallsWithURL,
    postVehicleRecallsWithURL,
    searchVehicleRecallsWithURL
} from "../api";

import api1file from "../apis/API1/api1.json";


export function fetchVehicleRecallsFromFile(file) {
    console.log(file)

    return dispatch => {
        dispatch(setLoadingFlag())
        const reader = new FileReader();
        reader.onload = async (e) => {
            const data = (e.target.result);
            dispatch(fetchVehicleRecallsSucceeded(JSON.parse(data)));
            dispatch(unsetLoadingFlag())
        }
        reader.readAsText(file);
    }
}
export function setStage(stage) {
    return {
        type: 'STAGE_SET',
        payload: stage,
    };
}
export function setLoadingFlag() {
    return {
        type: 'LOADING_START',
    };
}
export function unsetLoadingFlag() {
    return {
        type: 'LOADING_END',
    };
}
export function fetchVehicleRecallsSucceeded(data) {
    
    return {
        type: 'SUCCESS_GET_VEHICLE_RECALLS',
        payload: data,
    };
}

export function postVehicleRecalls(baseURL, data) {
     if (baseURL=="http://localhost:3001/v1/api/vehicle-recalls"){
        data=api1file
    }
    return dispatch => {
        dispatch(setLoadingFlag())

        postVehicleRecallsWithURL(baseURL, data).then(resp => {
            dispatch(fetchVehicleRecallsSucceeded(resp.data));
            dispatch(unsetLoadingFlag())
        }).catch(err => {
          alert(err);
          dispatch(unsetLoadingFlag())
        })



    };
}
export function getVehicleRecalls(baseURL) {
    return dispatch => {
        dispatch(setLoadingFlag())

        getVehicleRecallsWithURL(baseURL).then(resp => {
            dispatch(fetchVehicleRecallsSucceeded(resp.data));
            dispatch(unsetLoadingFlag())
        }).catch(err => {
            alert(err);
            dispatch(unsetLoadingFlag())
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
        dispatch(setLoadingFlag())

        searchVehicleRecallsWithURL(baseURL, searchValue).then(resp => {
            dispatch(searchVehicleRecallsSucceeded(resp.data));
            dispatch(unsetLoadingFlag())
        }).catch(err => {
            alert(err);
            dispatch(unsetLoadingFlag())
        })
    };
}