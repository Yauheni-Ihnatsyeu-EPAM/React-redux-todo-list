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

const connectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)



export default styled(connectedSearchBar)`
grid-area: search-bar;

`;