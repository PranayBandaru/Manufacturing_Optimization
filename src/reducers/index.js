import { combineReducers } from "redux";
import   optimizedReducer  from './optimizedReducer'
export default combineReducers({
    optimized : optimizedReducer
})