//TODO: add checkbox "show done" and button deleting all entered text

import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

export default class SearchBar extends React.Component {
    // getInitialState() {     return {value: 'Enter category to search'}; }
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter value to search'
        };

        this.handleSearchStringChange = this
            .handleSearchStringChange
            .bind(this);
        this.handleDoneFilterChange = this
            .handleDoneFilterChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleSearchStringChange(event) {

        this
            .props
            .setNameFilter(event.target.value);
        this.setState({value: event.target.value});
    }
    handleDoneFilterChange(event) {
        
        this
            .props
            .setDoneFilter(!this.props.showDone);

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.className}>
                <Checkbox label="Show done" onCheck={this.handleDoneFilterChange}/>
                <TextField
                    defaultValue=""
                    floatingLabelText={this.state.value}
                    onChange={this.handleSearchStringChange}/>
            </form>
        )
    }
}
