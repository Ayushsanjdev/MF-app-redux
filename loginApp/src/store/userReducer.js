export const UserReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN")
    return {
      ...state,
      globalUser: action.payload.user,
      globalEmail: action.payload.email,
      auth: action.payload.auth,
    };
  return state;
};

var initialState = {
  globalUser: null,
  globalEmail: null,
  auth: null,
};
