import { legacy_createStore as createStore } from "redux";
import  allReducers  from "../Reducer/index";

let Store = createStore(allReducers) 


export default Store