import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfiguration } from "./auth";

import { GET_CASES, DELETE_CASE, ADD_CASE } from "./types";

// Get Cases
export const getCases = () => (dispatch, getState) => {
  axios
    .get("/api/cases/", tokenConfiguration(getState))
    .then((res) => {
      dispatch({
        type: GET_CASES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Case
export const deleteCase = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/cases/${id}/`, tokenConfiguration(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCase: "case successfully deleted." }));
      dispatch({
        type: DELETE_CASE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add Case
export const addCase = (cases) => (dispatch, getState) => {
  axios
    .post("/api/cases/", cases, tokenConfiguration(getState))
    .then((res) => {
      dispatch(createMessage({ addCase: "case successfully created." }));
      dispatch({
        type: ADD_CASE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
