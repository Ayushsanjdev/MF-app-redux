export const LogoutUser = (auth) => {
  return {
    type: "LOG_OUT",
    payload: auth,
  };
};