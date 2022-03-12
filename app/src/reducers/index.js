export default function vehicle_recalls(state = {vehicle_recalls:[]}, action) {
    if (action.type === 'SUCCESS_GET_VEHICLE_RECALLS') {
        console.log("Data payload: " + JSON.stringify(action.payload));
        return { ...state, vehicle_recalls: action.payload };
     }
    return state;
}