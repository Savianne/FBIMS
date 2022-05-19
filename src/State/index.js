//Import all Reducers
import toggleNavbarReducer from "./reducers/toggle-navbar";
import changeColorSchemeReducer from "./reducers/change-color-scheme";
import dropdownToggleReducer from './reducers/dropdown-toggle';
import notificationToggleReducer from './reducers/notification-toggle';
import messagesToggleReducer from './reducers/messeges-toggle';
import confirmReducer from "./reducers/confirm";
import { masterlistSettingsToggleReducer } from "./reducers/masterlist-toggles";

//This module will combine our reducers all together
import { combineReducers } from "redux";

const combined_reducers = combineReducers({
    toggleNavbarReducer,
    changeColorSchemeReducer,
    dropdownToggleReducer,
    notificationToggleReducer,
    messagesToggleReducer,
    confirmReducer,
});

export default combined_reducers;