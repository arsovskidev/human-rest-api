import { combineReducers } from "redux";
import cases from "./cases";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  cases,
  errors,
  messages,
});
