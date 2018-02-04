import React from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {toggleTodo} from '../../actions/actions';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import {ListItem} from 'material-ui/List';

class TodoItem extends React.Component {
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

    rename(event) {}

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
        console.log(this.props);
        if (!this.state.renameMode) {
            return (
                <ListItem primaryText={this.state.name}>
                    <Checkbox
                        checked={this.props.done}
                        onCheck={() => this.props.onCheckboxClick(this.props.id)}/>

                    <IconButton
                        tooltip="Font Icon"
                        onClick={this
                        .props
                        .edit(...this.props, this.props.id)}>
                        <FontIcon className="material-icons"> edit </FontIcon>

                    </IconButton>
                </ListItem>
            )
        } else {
            return (
                <ListItem>

                    <input type="checkbox" name="subscribe"/>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    < button onClick={this.rename}>
                        rename
                    </button>
                </ListItem>
            )
        }
    }
};

// const StyledListItem = styled(ListItem)`

// `;
const mapDispatchToProps = dispatch => {return bindActionCreators({
    onCheckboxClick: toggleTodo
}, dispatch)}; 

export default connect(undefined, mapDispatchToProps)(TodoItem);