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
import Categories from '../../components/categories/categories';
import TodoList from '../../components/todoList/todoList';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SearchInput value='Enter search value'/>
        <Progress max="100" value="25">
    Загружено на <span id="value">25</span>%
  </Progress>
        
      {/* Add category input */}
        <Categories categories={['alo', 'bla', 'oro']}/>
        {/* Add to-do item input*/}
        <TodoList categories={['alo', 'bla', 'oro']}/>    
      </div>
    );
  }
}


const Progress = styled.progress `border: 1px solid black;display: block;`;
