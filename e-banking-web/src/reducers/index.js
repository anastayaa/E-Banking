import {combineReducers} from "redux"
import locationReducer from "./locationReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    errors:errorReducer,
    location:locationReducer
});