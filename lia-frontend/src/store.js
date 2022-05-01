import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { batteryCreateReducer, batteryDeleteReducer, batteryDetailsReducer, batteryListReducer, batteryUpdateReducer } from './reducers/batteryReducers';


const initialState = {};
const reducer = combineReducers({
    batteryList: batteryListReducer,
    batteryDetails: batteryDetailsReducer,
    batteryCreate: batteryCreateReducer,
    batteryUpdate: batteryUpdateReducer,
    batteryDelete: batteryDeleteReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;