import { combineReducers } from "@reduxjs/toolkit";
import crudReducer from "./CRUD/CrudReducer";

const rootReducer = combineReducers({
    crud: crudReducer
})
export default rootReducer