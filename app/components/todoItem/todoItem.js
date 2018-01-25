import React from 'react';

export default class todoItem extends React.Component {
    constructor(props) {
        super(props);

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

        this.state = {
            name: props.name,
            renameMode: false
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

    render() {
        if (!this.state.renameMode) 
            return (
                <div>
                    <input type="checkbox" name="subscribe"/> {this.state.name}
                    <button onClick={this.rename}>rename</button>
                </div>
            )
        else {
            return (
                <div>
                    <input type="checkbox" name="subscribe"/>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <button onClick={this.rename}>rename</button>
                </div>
            )
        }
    }
}
