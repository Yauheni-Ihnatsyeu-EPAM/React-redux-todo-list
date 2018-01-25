import React from 'react'
import TodoItem from '../todoItem/todoItem'
import styled from 'styled-components'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: this
                .props
                .categories
                .map((item, id) => {
                    return (<TodoItem
                        key={id}
                        name={item}
                        id={id}
                        onDelete={this
                        .deleteRow
                        .bind(this)}/>)
                })
        };

    }

    deleteRow(index) {
        var categoriesList = [...this.state.categoriesList];

        categoriesList.splice(index, 1);
        this.setState({categoriesList});
    }

    render() {
        return (
            <Table>
                <tbody>
                {this.state.categoriesList}
                </tbody>
            </Table>
        )
    }
}


const Table = styled.table `border: 1px solid black;
width: 70%;
display:inline-block;
 `;