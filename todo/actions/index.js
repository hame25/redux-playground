let nextId = 0;

export const addToDo  = (text) => {
  return {
    type: 'ADD',
    id: nextId++,
    text: text
  }
}

