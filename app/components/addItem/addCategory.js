import { connect } from 'react-redux'
import { addCategory } from '../../actions/actions'
import addItem from './addItem'
import {bindActionCreators} from 'redux';

import styled from 'styled-components'

const mapDispatchToProps = dispatch => {
  return {text:"Enter name of category", actions:bindActionCreators({onAddButton:addCategory}, dispatch)};
}




const styledAddCategory = styled(addItem)`
grid-area: add-category;
width: auto;
RaisedButton
{
  padding: 0px;
  
};
TextField{
  border: 1px solid grey;
  
}
padding: 15px;
`;

const AddCategory = connect(undefined,
  mapDispatchToProps
)(styledAddCategory);


export default AddCategory;