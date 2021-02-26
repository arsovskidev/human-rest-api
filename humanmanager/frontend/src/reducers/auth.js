import { MANAGER_LOADED, MANAGER_LOADING, AUTH_ERROR } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  manager: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MANAGER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case MANAGER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        manager: action.payload,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        manager: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
