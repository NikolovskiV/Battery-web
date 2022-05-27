import Axios from 'axios';
import { BATTERY_CREATE_FAIL, BATTERY_CREATE_REQUEST, BATTERY_CREATE_SUCCESS, BATTERY_DELETE_FAIL, BATTERY_DELETE_REQUEST, BATTERY_DELETE_SUCCESS, BATTERY_DETAILS_FAIL, BATTERY_DETAILS_REQUEST, BATTERY_DETAILS_SUCCESS, BATTERY_LIST_FAIL, BATTERY_LIST_REQUEST, BATTERY_LIST_SUCCESS, BATTERY_UPDATE_FAIL, BATTERY_UPDATE_REQUEST, BATTERY_UPDATE_SUCCESS } from "../constants/batteryConstants"

export const listBattery = () => async (dispatch) => {
    dispatch({
        type: BATTERY_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get("/api/bateries");
        dispatch({
            type: BATTERY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BATTERY_LIST_FAIL,
            payload: error.message
        });
    }
}

export const detailsBattery = (batteryId) => async (dispatch) => {
    dispatch({ type: BATTERY_DETAILS_REQUEST, payload: batteryId });
    try {
        const { data } = await Axios.get(`/api/bateries/${batteryId}`);
        dispatch({ type: BATTERY_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BATTERY_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message, })
    }
}

export const createBattery = () => async (dispatch) => {                      // , getState
    dispatch({ type: BATTERY_CREATE_REQUEST });
    // const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.post('/api/bateries', {});
        dispatch({ type: BATTERY_CREATE_SUCCESS, payload: data.battery });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({ type: BATTERY_CREATE_FAIL, payload: message });
    }
}

export const updateBattery = (battery) => async (dispatch) => {
    dispatch({ type: BATTERY_UPDATE_REQUEST, payload: battery });
    try {
        const { data } = await Axios.put(`/api/bateries/${battery._id}`, battery);
        dispatch({ type: BATTERY_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({ type: BATTERY_UPDATE_FAIL, error: message });
    }
}


export const deleteBattery = (batteryId) => async (dispatch) => {
    dispatch({ type: BATTERY_DELETE_REQUEST, payload: batteryId });
    try {
        const { data } = await Axios.delete(`/api/bateries/${batteryId}`, {});
        dispatch({ type: BATTERY_DELETE_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({ type: BATTERY_DELETE_FAIL, payload: message });
    }
}