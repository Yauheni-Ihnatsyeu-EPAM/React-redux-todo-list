import React from 'react';

export default class editTodo extends React.Component {
    // getInitialState() {     return {value: 'Enter category to search'}; }
    constructor(props) {
        super(props);
        this.handleNameChange = this
            .handleNameChange
            .bind(this);
        this.state = {
            editingTodo: this.props.editingTodo
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    updateCheck() {
        this.setState((oldState) => {
            oldState.editingTodo = !oldState.editingTodo;
            return Object.assign({}, oldState);
        });
    }

    render() {
        return (
            <a className={className}>
                <div className={this.props.className}>

                    <RaisedButton label="Save Changes" onClick={this.saveChanges}/>
                    <RaisedButton label="Cancel" onClick={this.saveChanges}/>

                    <Checkbox
                        label="Simple with controlled value"
                        checked={this.state.editingTodo.done}
                        onCheck={this
                        .updateCheck
                        .bind(this)}/>

                    <TextField
                        id="text-field-default"
                        defaultValue={this.props.name}
                        onChange={this.handleNameChange}/>name

                    <TextField
                        id="text-field-default"
                        defaultValue={this.props.description || ""}
                        onChange={this.handleDescriptionChange}/>description

                </div>
            </a>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onCheckboxClick: toggleTodo
    }, dispatch)
};

export default connect(undefined, mapDispatchToProps)(editTodo);