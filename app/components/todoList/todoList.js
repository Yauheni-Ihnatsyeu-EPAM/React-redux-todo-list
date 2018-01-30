import React from 'react'
import TodoItem from '../todoItem/todoItem'
import styled from 'styled-components'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {};

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
        this.cancel = this
            .cancel
            .bind(this);
    }

    setEditState(editingTodo, todoId) {
        this.setState({editingTodo, todoId})
    }
    editTaskDescription() {
        // this.setState({taskDescription: event.target.value});
    }
    editNameDescription() {
        // this.setState({taskName: event.target.value});
    }
    saveChanges() {}
    cancel() {

        //бля доделай эту шнягу
        // this.setState();
    }

    render() {
        // if (this.props.todos.lenght === 0)     return (         <div></div>     );
        if (this.state.editingTodo) {
            return (
                <div>
                    <button>Save changes</button>
                    <button>
                        Cancel
                    </button>
                    <input type="checkbox" name="subscribe"/>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="Decrition"/>
                </div>
            )
        } else {
            return (
                <Table>
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
border: 1px solid black;
display: inline-block;
width: 30%; 
`;