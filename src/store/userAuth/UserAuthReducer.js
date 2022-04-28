import { UserActionType } from "../redux/UserActionTypes";
const initialValues = {
  token: null,
  loading: "",
  user: {},
  users: [],
};

export const authReducer = (state = initialValues, action) => {
  switch (action.type) {
    case UserActionType.SIGNUP_USER:
      return {
        ...state,
        token: action.payload.jwt,
        user: action.payload.user,
      };
    case UserActionType.AUTH_USER_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case UserActionType.USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
