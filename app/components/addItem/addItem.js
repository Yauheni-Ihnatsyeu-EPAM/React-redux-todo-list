//TODO: add checkbox "show done" and button deleting all entered text

import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
            <div className={this.props.className}>
                {/* <input type="text" value={this.state.text} /> */}
                <TextField
                    defaultValue=""
                    floatingLabelText={this.props.text}
                    onChange={this.handleChange}
                    />
                {/* <button
                    onClick={() => this.props.actions.onAddButton(this.state.text, this.props.selectedCategory)}>Add</button> */}
                     <FlatButton label="Add" onClick={() => this.props.actions.onAddButton(this.state.text, this.props.selectedCategory)}/>
            </div>
        )
    }
}
