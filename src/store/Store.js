import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/RootReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
