import React from 'react';
import TodoItem from '../todoItem/todoItem';
import styled from 'styled-components';

import {List, ListItem} from 'material-ui/List';
import EditTodo from '../editTodoComponent/editTodoComponent'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.todos.lenght === 0) 
            return (
                <div></div>
            );
        if (this.props.editingTodo) {
            return (
                <EditTodo className={this.props.className} ></EditTodo>
            )
        } else {
            return (
                <List className={this.props.className}>
                    {this
                        .props
                        .todos
                        .map(item =>< TodoItem key = {
                            item.id
                        }
                        todo = {
                            item
                        } />)}

                </List>
            )
        }
    }
}
