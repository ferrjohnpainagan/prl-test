const reducer = (todo = {}, action) => {
  switch (action.type) {
    case "UPDATE_TODO": {
      return todo;
    }
    case "REMOVE_TODO": {
      return todo;
    }
    case "ADD_TODO": {
      return todo;
    }
    default:
      return todo;
  }
};

export default reducer;
