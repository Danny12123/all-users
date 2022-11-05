import {usersReducer} from "../Reducer/User";
import Reducer from "../Reducer/Reducer";
import { combineReducers} from "redux";


let allReducers  = combineReducers({
    Reducer,
    usersReducer
})

export default allReducers