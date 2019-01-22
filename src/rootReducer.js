import { combineReducers } from "redux";
import appReducer from "./containers/App/reducers";
import tableReducer from "./containers/ConnectedTable/reducers";

export default combineReducers({
  app: appReducer,
  table: tableReducer
});
