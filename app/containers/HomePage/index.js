/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

//TODO: add progress bar

import React from 'react';
import styled from 'styled-components'

import {FormattedMessage} from 'react-intl';
import messages from './messages';
import SearchBar from './liveSearchBar';
import LiveCategories from '../../components/categories/categories';
import VisibleTodoList from './visibleTodoList'; //перенести в другую папку
import AddCategory from '../../components/addItem/addCategory';
import AddTodo from '../../components/addItem/addTodo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Progress from './liveProgress';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <MuiThemeProvider>
        <StyledIndexPageDiv>
          <SearchBar value='Enter search value'/>
          <Progress/>
          <AddCategory/>
          <AddTodo/>

          <LiveCategories/>

          <VisibleTodoList/>
        </StyledIndexPageDiv>
      </MuiThemeProvider>
    );
  }
}

// styled(LiveCategories)`width:30%;`;
const StyledIndexPageDiv = styled.div`
display:grid;
grid-template-areas: 
". . search-bar search-bar"
"progress-bar progress-bar progress-bar progress-bar"
"add-category add-category add-todo add-todo"
"categories categories todos todos";
grid-template-rows: auto;
grid-template-columns: auto;
`;
