const progress = (state = {active: 1}, action) => {
  switch(action.type) {
    case 'PROGRESS_CLICK':
      return Object.assign({}, state, {
        active: action.id
      });
    default:
      return state;
  }
}

export default progress;
