import React from 'react';
import { connect } from 'react-redux'
import {fetchTodos} from '../../actions/actions';

class CleverName extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleChange = this
            .handleChange
            .bind(this);

           
        
        this.state = {
            name: props.name,
            renameMode: false
        };
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }
    

    render() {
        
        if (!this.props.selected) 
            return (
                <span>
                    {/* <input type="checkbox" name="subscribe"/> */}
                    {this.state.name}
                </span>
            )
        else {
            return (
                <b>
                    {/* <input type="checkbox" name="subscribe"/> */}
                    {this.state.name}
                </b>
            )
        }
    }
}

export default connect()(CleverName)

// function NumberList(props) {     const numbers = props.numbers;     const
// listItems = numbers.map((number) =>       <ListItem key={number.toString()}
// value={number} />     );     return (       <ul> {listItems}  </ul> ); }