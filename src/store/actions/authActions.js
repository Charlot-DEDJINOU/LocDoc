// store/actions/authActions.js
import { post } from "../../services/apiService";

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await post("/auth/login", credentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.token });
  } catch (error) {
    console.error("Login error", error);
    // dispatch error message si besoin
  }
};


// store/actions/authActions.js
export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

