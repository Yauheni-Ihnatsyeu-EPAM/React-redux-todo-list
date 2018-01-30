import React from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {toggleTodo} from '../../actions/actions';

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

    rename(event) {
        this.props
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
        console.log(this.props);
        if (!this.state.renameMode) 
            return (
                <tr>
                    <td>
                        <input
                            type="checkbox"
                            name="subscribe"
                            value={this.props.done}
                            onClick={() => this.props.onCheckboxClick(this.props.id)}/> {this.state.name}
                        <button onClick={this.props.edit(true,this.props.id)}>edit</button>
                    </td>
                </tr>
            )
        else {
            return (
                <tr>
                    <td>
                        <input type="checkbox" name="subscribe"/>
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                        <button onClick={this.rename}>rename</button>
                    </td>
                </tr>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onCheckboxClick: toggleTodo
    }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(TodoItem);
