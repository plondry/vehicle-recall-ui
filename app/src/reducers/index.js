export default function vehicle_recalls(state = {vehicle_recalls:[]}, action) {
    if (action.type === 'SUCCESS_INIT_VEHICLE_RECALLS') {
        return { vehicle_recalls: state.vehicle_recalls.concat(action.payload) };
     }
    return state;
}