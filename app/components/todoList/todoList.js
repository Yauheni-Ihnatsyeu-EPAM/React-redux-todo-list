import React from 'react'
import TodoItem from '../todoItem/todoItem'
import styled from 'styled-components'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            todoDone:false
        };

        this.setEditState = this
            .setEditState
            .bind(this);
        this.editTaskDescription = this
            .editTaskDescription
            .bind(this);
        this.editNameDescription = this
            .editNameDescription
            .bind(this);
        this.saveChanges = this
            .saveChanges
            .bind(this);
            // this.toggleDoneState = this
            // .toggleDoneState
            // .bind(this);
        this.cancel = this
            .cancel
            .bind(this);
    }

    setEditState(editingTodo, todoId) {
        this.setState({editingTodo, todoId});
        console.log(editingTodo);
    }
    editTaskDescription() {
        // this.setState({taskDescription: event.target.value});
    }
    editNameDescription() {
        // this.setState({taskName: event.target.value});
    }
    saveChanges() {
        this.editingTodo(this.state.editingTodo.id,this.state.editingTodo.name, this.state.editingTodo.done, this.state.editingTodo.description);
        his.setState({editingTodo:undefined});
    }

    
    cancel() {
        //бля доделай эту шнягу
        // this.setState();
    }

    render() {
        if (this.props.todos.lenght === 0)     return (         <div></div>     );
        if (this.state.editingTodo) {
            return (
                
            )
        } else {
            return (
                <Table className={this.props.className}>
                    <tbody>
                        {this
                            .props
                            .todos
                            .map(
                            item =>< TodoItem key = {
                                item.id
                            }
                            {
                                ...item
                            }
                            edit = {
                                this.setEditState
                            } />)}
                    </tbody>
                </Table>
            )
        }
    }
}

const Table = styled.table `

`;