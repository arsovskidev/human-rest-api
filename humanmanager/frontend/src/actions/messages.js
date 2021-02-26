import { CREATE_MESSAGE } from "./types";

// Create Message
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
