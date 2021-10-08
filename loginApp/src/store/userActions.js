export const LoginUser = (user, email, auth) => {
  return {
    type: "LOG_IN",
    payload: { user, email, auth },
  };
};
