export const profileReducer = (state = [], action) => {
  if (action.type === "LOG_OUT")
    return {
      ...state,
      action: null,
    };
  return state;
};