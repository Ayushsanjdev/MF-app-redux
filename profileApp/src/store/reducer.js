export const profileReducer = (state = initialState, action) => {
  if (action.type === "LOG_OUT")
    return {
      ...state,
      isAuthenticated: null,
    };
  return state;
};

var initialState = {
  isAuthenticated: null,
}