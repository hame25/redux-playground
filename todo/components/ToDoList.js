import React, { PropTypes } from 'react';

const TodoList = ({ todos}) => (
  <ul>
    {todos.map(todo =>
      <li key={todo.id}>{todo.text}</li>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
