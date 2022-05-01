const {
  BATTERY_DETAILS_FAIL,
  BATTERY_DETAILS_REQUEST,
  BATTERY_DETAILS_SUCCESS,
  BATTERY_LIST_FAIL,
  BATTERY_LIST_REQUEST,
  BATTERY_LIST_SUCCESS,
  BATTERY_CREATE_REQUEST,
  BATTERY_CREATE_SUCCESS,
  BATTERY_CREATE_FAIL,
  BATTERY_CREATE_RESET,
  BATTERY_UPDATE_REQUEST,
  BATTERY_UPDATE_SUCCESS,
  BATTERY_UPDATE_FAIL,
  BATTERY_UPDATE_RESET,
  BATTERY_DELETE_REQUEST,
  BATTERY_DELETE_SUCCESS,
  BATTERY_DELETE_FAIL,
  BATTERY_DELETE_RESET,
} = require("../constants/batteryConstants");

export const batteryListReducer = (
  state = { loading: true, batterys: [] },
  action
) => {
  switch (action.type) {
    case BATTERY_LIST_REQUEST:
      return { loading: true };
    case BATTERY_LIST_SUCCESS:
      return { loading: false, batterys: action.payload };
    case BATTERY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const batteryDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case BATTERY_DETAILS_REQUEST:
      return { loading: true };
    case BATTERY_DETAILS_SUCCESS:
      return { loading: false, battery: action.payload };
    case BATTERY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const batteryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BATTERY_CREATE_REQUEST:
      return { loading: true };
    case BATTERY_CREATE_SUCCESS:
      return { loading: false, success: true, battery: action.payload };
    case BATTERY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case BATTERY_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const batteryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BATTERY_UPDATE_REQUEST:
      return { loading: true };
    case BATTERY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case BATTERY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BATTERY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const batteryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BATTERY_DELETE_REQUEST:
      return { loading: true };
    case BATTERY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BATTERY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BATTERY_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
