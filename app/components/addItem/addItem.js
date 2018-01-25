//TODO: add checkbox "show done" and button deleting all entered text



import React from 'react';

export default class AddItem extends React.Component {
    // getInitialState() {     return {value: 'Enter category to search'}; }
    constructor(props) {
        super(props);
        this.state = {value: 'Enter value to search'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            
            <input type="checkbox" id="showDone" name="subscribe"/>
            <label for="showDone">Show done</label>
                <label>
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}