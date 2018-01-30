import { connect } from 'react-redux'
import { addTodo } from '../../actions/actions'
import addItem from './addItem'
import {bindActionCreators} from 'redux';

import styled from 'styled-components'

const mapDispatchToProps = dispatch => {
  return {text:"add todos",  actions:bindActionCreators({onAddButton:addTodo}, dispatch)};
}

const mapStateToProps = state => {
  return {
    selectedCategory: state.get('filters').category
  }
}
//напоминание о том что могло бы быть если бы выбранная категория не была бы перенесена в фильтры
//годный код)
// function findSelectedCategory(categories){
//   let arr = categories.filter(category=>category.selected);
//   return arr[0] ? arr[0].id: undefined ;
// }

const AddTodo = connect(mapStateToProps,
  mapDispatchToProps
)(addItem)


export default AddTodo