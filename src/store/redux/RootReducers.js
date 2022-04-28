import { authReducer } from "../userAuth/UserAuthReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
});
export default reducers;
