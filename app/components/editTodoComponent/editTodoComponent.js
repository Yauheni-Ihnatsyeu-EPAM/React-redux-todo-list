import React from 'react';
import {connect} from 'react-redux';

import {editTodo, setEditTodoFilter} from '../../actions/actions';
import connectAdvanced from 'react-redux/lib/components/connectAdvanced';
import {bindActionCreators} from 'redux';

import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

import styled from 'styled-components';

class editTodoComponent extends React.Component {
    // getInitialState() {     return {value: 'Enter category to search'}; }
    constructor(props) {
        super(props);
        this.handleNameChange = this
            .handleNameChange
            .bind(this);
        this.handleDescriptionChange = this
            .handleDescriptionChange
            .bind(this);

        this.state = {
            done: props.done,
            id: props.id,
            name: props.name,
            categoryId: props.categoryId
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleDescriptionChange(event) {
        console.log("description change");
        this.setState({description: event.target.value});
    }

    updateCheck() {
        this.setState({done: arguments[1]});
    }

    render() {

        return (
            <StyledDiv className={this.props.className}>
                <RaisedButton
                    label="Save Changes"
                    onClick={() => {
                    this
                        .props
                        .onSaveChanges(this.state);
                    this
                        .props
                        .setEditTodoFilter(null)
                }}/>
                <RaisedButton
                    label="Cancel"
                    onClick={() => this.props.setEditTodoFilter(null)}/>
                <Checkbox
                    label="Simple with controlled value"
                    checked={this.state.done}
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

            </StyledDiv>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onSaveChanges: editTodo,
        setEditTodoFilter
    }, dispatch)
};

const mapStateToProps = state => {
    return {
        ...state
            .get('filters')
            .editingTodo
    }
}

const StyledDiv = styled.div `
display:grid;
grid-auto-flow: dense;
`;

export default connect(mapStateToProps, mapDispatchToProps)(editTodoComponent);
