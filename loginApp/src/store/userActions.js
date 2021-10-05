export const LoginUser = (user, isLogged) => {
  return {
    type: "LOG_IN",
    payload: { user, isLogged },
  };
};

export const LogoutUser = () => {
  return {
    type: "LOG_OUT",
    payload: null,
  };
};
