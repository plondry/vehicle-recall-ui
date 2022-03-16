export default function vehicle_recalls(state = {
    vehicle_recalls:[],
    search_results: [],
    isLoading: false,
    stage: "API0"}, action) {
    if (action.type === 'SUCCESS_GET_VEHICLE_RECALLS') {
        return { ...state, vehicle_recalls: action.payload };
    } else if (action.type === 'SUCCESS_SEARCH_VEHICLE_RECALLS') {
        return { ...state, search_results: action.payload };
    } else if (action.type === 'LOADING_END') {
        return { ...state, isLoading: false };
    } else if (action.type === 'LOADING_START') {
        return { ...state, isLoading: true };
    } else if (action.type === 'STAGE_SET') {
        return { ...state, stage: action.payload };
    }
    return state;
}