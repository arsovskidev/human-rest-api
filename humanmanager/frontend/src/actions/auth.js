import axios from "axios";
import { returnErrors } from "./messages";

import { MANAGER_LOADED, MANAGER_LOADING, AUTH_ERROR } from "./types";

// Check token, load the manager.
export const loadManager = () => (dispatch, getState) => {
  // Manager Loading
  dispatch({ type: MANAGER_LOADING });

  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers configuration
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/manager", config)
    .then((res) => {
      dispatch({
        type: MANAGER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
