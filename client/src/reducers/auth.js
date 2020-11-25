const auth = (auth = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return auth;
    case "SIGN_UP":
      return auth;
    default:
      return auth;
  }
};

export default auth;
