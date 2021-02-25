import { GET_CASES, DELETE_CASE, ADD_CASE } from "../actions/types.js";

const initialState = {
  cases: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CASES:
      return {
        ...state,
        cases: action.payload,
      };
    case DELETE_CASE:
      return {
        ...state,
        cases: state.cases.filter((cases) => cases.id !== action.payload),
      };
    case ADD_CASE:
      return {
        ...state,
        cases: [...state.cases, action.payload],
      };
    default:
      return state;
  }
}
