//TODO: add checkbox "show done" and button deleting all entered text

import React from 'react';
import styled from 'styled-components'

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
        
        this.props.setNameFilter(event.target.value);
        this.setState({value: event.target.value});
    }
    handleDoneFilterChange(event) {
        this.props.setDoneFilter(event.target.value);
        
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.className}>
                <div>
                    <input
                        type="checkbox"
                        id="showDone"
                        name="subscribe"
                        onClick={this.handleDoneFilterChange}/>
                    <label>Show</label>
                </div>
                <label>
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleSearchStringChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
