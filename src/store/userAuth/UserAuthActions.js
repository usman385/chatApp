import { UserActionType } from "../redux/UserActionTypes";
import authInstance from "../../api/axios";

export const signp = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(authtLoader(true));
      const res = await authInstance.post("auth/signUp", payload);

      localStorage.setItem("token", JSON.stringify(res));
      const temp = localStorage.getItem("token");

      dispatch(loginSuccess(res));
      dispatch(authtLoader(false));
    } catch (error) {
      dispatch(authtLoader(false));
    }
  };
};

export const login = (payload) => {
  console.log("Login action called");
  return async (dispatch) => {
    try {
      dispatch(authtLoader(true));
      const res = await authInstance.post("/auth/login", payload);
      console.log("response data", res);

      localStorage.setItem("token", JSON.stringify(res));
      const temp = localStorage.getItem("token");

      console.log("token", temp);
      dispatch(loginSuccess(res));
      dispatch(authtLoader(false));
    } catch (error) {
      dispatch(authtLoader(false));
      console.log("Sigup failed", error);
    }
  };
};

//Loader action
export const authtLoader = (loading) => {
  console.log("loading value ", loading);
  try {
    return async (dispatch) => {
      dispatch({
        type: UserActionType.AUTH_USER_LOADER,
        payload: loading,
      });
    };
  } catch (error) {
    console.log("error", error);
  }
};

//Login succes Action
export const loginSuccess = (user_data) => {
  try {
    return async (dispatch) => {
      dispatch({
        type: UserActionType.USER_DETAILS_SUCCESS,
        payload: user_data,
      });
    };
  } catch (error) {
    console.log("error", error);
  }
};
