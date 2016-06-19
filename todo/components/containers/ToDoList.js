import { connect } from 'react-redux';
import TodoList from '../ToDoList';

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const ToDoList = connect(
  mapStateToProps
)(TodoList)

export default ToDoList;
