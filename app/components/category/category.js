import React from 'react';
import { connect } from 'react-redux'
import CleverName from '../cleverName/cleverName';
import {fetchTodos} from '../actions';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.rename = this
            .rename
            .bind(this);
        this.deleteThis = this
            .deleteThis
            .bind(this);
        this.addSubCategory = this
            .addSubCategory
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.fetchTodos = this
            .fetchTodos
            .bind(this);

        this.state = {
            name: props.name,
            renameMode: false,
            choised: false
        };
    }
    rename(event) {
        this.setState(prevState => ({
            renameMode: !prevState.renameMode
        }));
    }

    deleteThis() {
        this
            .props
            .onDelete(this.props.id);
    }
    addSubCategory() {}

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    fetchTodos(event) {
        dispatch(fetchTodos(this.props.id));
    }

    render() {
        if (!this.state.renameMode) 
            return (
                <tr>
                    <td>
                        <input type="checkbox" name="subscribe"/>
                        <CleverName name={this.state.name} choised={this.state.choised} onClick={this.fetchTodos}/>
                        <button onClick={this.rename}>ren</button>
                        <button onClick={this.deleteThis}>del</button>
                        <button onClick={this.addSubCategory}>sub</button>
                    </td>
                </tr>
            )
        else {
            return (
                <tr>
                    <td>
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                        <button onClick={this.rename}>ren</button>
                        <button onClick={this.deleteThis}>del</button>
                        <button onClick={this.addSubCategory}>sub</button>
                    </td>
                </tr>
            )
        }
    }
}

// function NumberList(props) {     const numbers = props.numbers;     const
// listItems = numbers.map((number) =>       <ListItem key={number.toString()}
// value={number} />     );     return (       <ul> {listItems}  </ul> ); }