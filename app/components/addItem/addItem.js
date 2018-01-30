//TODO: add checkbox "show done" and button deleting all entered text

import React from 'react';

import styled from 'styled-components'

export default class AddItem extends React.Component {
    // getInitialState() {     return {value: 'Enter category to search'}; }
    constructor(props) {
        super(props);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.state = {
            text: this.props.text
        }
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <Div>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <button
                    onClick={() => this.props.actions.onAddButton(this.state.text, this.props.selectedCategory)}>Add</button>
            </Div>
        )
    }
}

const Div = styled.div `
display:inline; width:300px; color:black;
margin:0 auto;
`;

