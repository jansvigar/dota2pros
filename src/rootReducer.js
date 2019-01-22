import { combineReducers } from "redux";
import appReducer from "./containers/App/reducers";

export default combineReducers({
  app: appReducer
});
