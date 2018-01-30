import {connect} from 'react-redux';
import Progress from '../../components/progress/progress';

const getTodosPercent = (todos,filter) => {
  if (todos.lenght === 0) 
    return 100;
    let maxTodos = todos.length;
    todos = todos.filter(todo => todo.categoryId === filter.category)
    todos = todos.filter(todo => todo.done)

    let percent = todos.length / maxTodos * 100;
    console.log(percent)

  return percent;
}

const mapStateToProps = state => {
  return {
    percent: getTodosPercent(state.get('todos'), state.get('filters'))
  }
}

export default connect(mapStateToProps)(Progress)
