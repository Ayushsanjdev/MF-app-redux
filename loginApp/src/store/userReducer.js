export const UserReducer = (state = initialState, action) => {
  if (action.type === "LOG_IN")
    return {
      ...state,
      globalUser: action.payload.user,
      isLogged: action.payload.isLogged,
    };
  return state;
};

var initialState = {
  globalUser: null,
  isLogged: false,
};
