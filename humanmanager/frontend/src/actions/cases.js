import axios from "axios";

import { GET_CASES, DELETE_CASE, ADD_CASE } from "./types";

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
      dispatch({
        type: DELETE_CASE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add Cases
export const addCase = (cases) => (dispatch) => {
  axios
    .post("/api/cases/", cases)
    .then((res) => {
      dispatch({
        type: ADD_CASE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
