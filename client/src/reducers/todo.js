const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_TODO": {
      console.log('updated')
      return state;
    }
    case "REMOVE_TODO": {
      return state;
    }
    case "ADD_TODO": {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
