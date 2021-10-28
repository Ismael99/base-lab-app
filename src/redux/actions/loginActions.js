import { LOGIN_ACTIONS } from "./types";

export const setLoggedUser = (user) => ({
  type: LOGIN_ACTIONS.LOGIN_USER,
  payload: user,
})