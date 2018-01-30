import {connect} from 'react-redux';
import {toggleTodo, renameTodo} from '../../actions/actions';
import TodoList from '../../components/todoList/todoList';
import {bindActionCreators} from 'redux';

const getVisibleTodos = (todos, filter) => {
  if (todos.lenght === 0) 
    return [];
  if (filter.category != undefined){ 
    todos = todos.filter(todo => todo.categoryId === filter.category)
  }

  if (filter.done) 
    todos = todos.filter(todo => todo.done)

  if (filter.string) 
    todos = todos.filter(todo => todo.name.search(filter) == 0)

  return todos;
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.get('todos'), state.get('filters'))
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onTodoClick: toggleTodo,
    onTodoRename: renameTodo
  }, dispatch);
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList