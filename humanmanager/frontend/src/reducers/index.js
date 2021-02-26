import { combineReducers } from "redux";
import cases from "./cases";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  cases,
  errors,
  messages,
  auth,
});
