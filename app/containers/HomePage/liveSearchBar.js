import {connect} from 'react-redux';
import {setDoneFilter, setNameFilter} from '../../actions/actions';
import SearchBar from '../../components/searchBar/searchBar';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';



const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setDoneFilter,
    setNameFilter
  }, dispatch);
}

const mapStateToProps = state => {
  console.log(state.get('filters'));
  return {
    showDone: state.get('filters').done 
  }
}

const connectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)



export default styled(connectedSearchBar)`
grid-area: search-bar;

`;