import React from 'react';

export default class CleverName extends React.Component {
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
        if (!this.props.choised) 
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

// function NumberList(props) {     const numbers = props.numbers;     const
// listItems = numbers.map((number) =>       <ListItem key={number.toString()}
// value={number} />     );     return (       <ul> {listItems}  </ul> ); }