import React from 'react';

export default class Category extends React.Component {
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
                    <button onClick={this.rename}>ren</button>
                    <button onClick={this.deleteThis}>del</button>
                    <button onClick={this.addSubCategory}>sub</button>
                </div>
            )
        else {
            return (
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <button onClick={this.rename}>ren</button>
                    <button onClick={this.deleteThis}>del</button>
                    <button onClick={this.addSubCategory}>sub</button>
                </div>
            )
        }
    }
}

// function NumberList(props) {     const numbers = props.numbers;     const
// listItems = numbers.map((number) =>       <ListItem key={number.toString()}
// value={number} />     );     return (       <ul> {listItems}  </ul> ); }