export const LoginUser = (user, email, auth) => {
  return {
    type: "LOG_IN",
    payload: { user, email, auth },
  };
};

export const LogoutUser = () => {
  return {
    type: "LOG_OUT",
    payload: null,
  };
};
