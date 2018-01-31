import { connect } from 'react-redux'
import { addCategory } from '../../actions/actions'
import addItem from './addItem'
import {bindActionCreators} from 'redux';

import styled from 'styled-components'

const mapDispatchToProps = dispatch => {
  return {text:"add category", actions:bindActionCreators({onAddButton:addCategory}, dispatch)};
}




const styledAddCategory = styled(addItem)`
grid-area: add-category;
width: auto;
button
{
  border: 1px solid grey;
  
};
input{
  border: 1px solid grey;
  
}
margin: 15px 30px;
`;

const AddCategory = connect(undefined,
  mapDispatchToProps
)(styledAddCategory);


export default AddCategory;