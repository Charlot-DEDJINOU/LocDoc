// store/userReducer.js
const initialState = {
  profile: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER_START":
      return { ...state, loading: true };
    case "LOAD_USER_SUCCESS":
      return { ...state, loading: false, profile: action.payload };
    default:
      return state;
  }
};

export default userReducer;

