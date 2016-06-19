const toDo = (state = [], action) => {
  if(action.type === 'ADD') {
    return [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ];
  } else {
    return state;
  }
}

export default toDo;
