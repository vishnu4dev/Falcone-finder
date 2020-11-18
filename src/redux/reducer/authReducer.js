import { AUTH_TOKEN } from "../action/actionType";

const initialState = {
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return {
        token: action.payload
      };
    default:
      return state;
  }
};
