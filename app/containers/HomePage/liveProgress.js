import {connect} from 'react-redux';
import Progress from '../../components/progress/progress';
import styled from 'styled-components';

const getTodosPercent = (todos,filter) => {
  if (todos.lenght === 0 || !todos || !filter) 
    return 0;
    let maxTodos = todos.length;
    todos = todos.filter(todo => todo.categoryId === filter.category.id)
    todos = todos.filter(todo => todo.done)

    let percent = todos.length / maxTodos * 100;
    
  return percent;
}

const mapStateToProps = state => {
  return {
    percent: getTodosPercent(state.get('todos').present, state.get('filters'))
  }
}

const connectedProgress = connect(mapStateToProps)(Progress);

export default styled(connectedProgress)`
grid-area: progress-bar;
background-color: red;
margin: 30px;
`;
