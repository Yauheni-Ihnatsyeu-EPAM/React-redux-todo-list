import {connect} from 'react-redux';
import {toggleTodo, renameTodo, editTodo} from '../../actions/actions';
import TodoList from '../../components/todoList/todoList';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';

const getVisibleTodos = (todos, filter) => {
  if (todos.lenght === 0) 
    return [];
  if (filter.category != undefined) {
    todos = todos.filter(todo => todo.categoryId === filter.category)
  }

  if (filter.done) 
    todos = todos.filter(todo => todo.done)

  if (filter.string) 
    todos = todos.filter(todo => todo.name.search(filter.string) == 0)

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
    onTodoRename: renameTodo,
    editTodo
  }, dispatch);
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

const Edit = ({className}) => (
  <a className={className}>
    <div className={this.props.className}>
      <button onClick={this.saveChanges}>Save changes</button>
      <button>
        Cancel
      </button>
      <input
        type="checkbox"
        value={this.state.editingTodo.done}
        name="subscribe"
        onClick={() => this.todoDone}/>
      <input
        type="text"
        value={this.state.editingTodo.name}
        onChange={this.handleChange}/>
      <input
        type="text"
        value={this.state.editingTodo.description || ""}
        name="Decrition"
        onChange={this.handleChange}/>
    </div>
  </a>
)

export default styled(VisibleTodoList)`
grid-area: todos;
border: 1px solid grey;
border-radius: 4px;
tr{
  border: 1px solid grey;
}
`;