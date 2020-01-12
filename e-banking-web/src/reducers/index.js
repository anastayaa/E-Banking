import {combineReducers} from "redux"
import locationReducer from "./locationReducer";
import errorReducer from "./errorReducer";
import agencyReducer from "./Admin/agencyReducer";
import agentReducer from "./Admin/agentReducer";
import securityReducer from "./Admin/securityReducer";

export default combineReducers({
    errors:errorReducer,
    location:locationReducer, 
    agency:agencyReducer,
    agent:agentReducer,
    security:securityReducer
});