export default function vehicle_recalls(state = {
    vehicle_recalls:[],
    search_results: [],
    isLoading: false,
    stage: "API1"}, action) {
    if (action.type === 'SUCCESS_GET_VEHICLE_RECALLS') {
        return { ...state, vehicle_recalls: action.payload };
    } else if (action.type === 'SUCCESS_SEARCH_VEHICLE_RECALLS') {
        return { ...state, search_results: action.payload };
    }
    return state;
}