import { SHOW_TOAST } from "./actionType";

export const showToast = message => {
  return {
    type: SHOW_TOAST,
    payload: message
  };
};
