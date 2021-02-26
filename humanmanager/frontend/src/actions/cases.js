import axios from "axios";
import { createMessage } from "./messages";

import { GET_CASES, DELETE_CASE, ADD_CASE, GET_ERRORS } from "./types";

// Get Cases
export const getCases = () => (dispatch) => {
  axios
    .get("/api/cases/")
    .then((res) => {
      dispatch({
        type: GET_CASES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Delete Case
export const deleteCase = (id) => (dispatch) => {
  axios
    .delete(`/api/cases/${id}/`)
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
export const addCase = (cases) => (dispatch) => {
  axios
    .post("/api/cases/", cases)
    .then((res) => {
      dispatch(createMessage({ addCase: "case successfully created." }));
      dispatch({
        type: ADD_CASE,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
