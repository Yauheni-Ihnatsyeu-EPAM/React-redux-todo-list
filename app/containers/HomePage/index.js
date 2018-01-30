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

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SearchInput from '../../components/searchInput/searchInput';
import LiveCategories from '../../components/categories/categories';
import VisibleTodoList from './visibleTodoList';//перенести в другую папку
import AddCategory from '../../components/addItem/addCategory';
import AddTodo from '../../components/addItem/addTodo';

import Progress from './liveProgress';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {/* <SearchInput value='Enter search value'/> */}
        {/* <Progress max="100" value="25"> */}
    {/* Загружено на <span id="value">25</span>% */}
  <Progress />
        
      <AddCategory/><AddTodo/>
        <LiveCategories/>
        
        <VisibleTodoList/>
      </div>
    );
  }
}

// styled(LiveCategories)`width:30%;`;
styled(VisibleTodoList)`width:70%;`;
