import React from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {toggleTodo, setEditTodoFilter} from '../../actions/actions';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import {ListItem} from 'material-ui/List';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

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
            todo: this.props.todo
        };
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
        return (
            <ListItem primaryText={this.props.todo.name}>
                <Checkbox
                    checked={this.props.todo.done}
                    onCheck={() => this.props.onCheckboxClick(this.props.todo.id)}/>

                <IconButton
                    tooltip="Edit todo"
                    onClick={() => this.props.setEditTodoFilter(this.props.todo)}>
                    <FontIcon className="material-icons">
                        edit
                    </FontIcon>
                </IconButton>
            </ListItem>
        )
    }
};

// const StyledListItem = styled(ListItem)`
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onCheckboxClick: toggleTodo,
        setEditTodoFilter
    }, dispatch)
};

export default connect(undefined, mapDispatchToProps)(TodoItem);