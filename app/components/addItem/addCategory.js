import { connect } from 'react-redux'
import { addCategory } from '../../actions/actions'
import addItem from './addItem'
import {bindActionCreators} from 'redux';

import styled from 'styled-components'

const mapDispatchToProps = dispatch => {
  return {text:"add category", actions:bindActionCreators({onAddButton:addCategory}, dispatch)};
}

const AddCategory = connect(undefined,
  mapDispatchToProps
)(addItem)

styled(AddCategory)`display:inline; width:30%;`;

export default AddCategory