export const UserReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN")
    return {
      ...state,
      globalUser: action.payload.user,
      globalEmail: action.payload.email,
      isAuthenticated: action.payload.auth,
    };
  if (action.type === "LOG_OUT") return {
    ...state,
    isAuthenticated: null,
  };
  return state;
};

var initialState = {
  globalUser: null,
  globalEmail: null,
  isAuthenticated: null,
};
