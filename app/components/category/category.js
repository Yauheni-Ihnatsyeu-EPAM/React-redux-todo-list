import React from 'react';

import CleverName from '../cleverName/cleverName';

import {connect} from 'react-redux';
import {setCategoryFilter} from '../../actions/actions';
import {bindActionCreators} from 'redux';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
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
            renameMode: false,
            choised: props.selected,
            id: props.id
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
                <tr
                    onClick={() => {
                    this
                        .props
                        .onCategoryClick(this.props.id);
                }}>
                    <td>
                        <input type="checkbox" name="subscribe"/>
                        <CleverName name={this.state.name} selected={this.props.selected}/>
                        <button onClick={this.rename}>ren</button>
                        <button onClick={this.deleteThis}>del</button>
                        <button onClick={this.addSubCategory}>sub</button>
                    </td>
                </tr>
            )
        else {
            return (
                <tr>
                    <td>
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                        <button onClick={this.rename}>ren</button>
                        <button onClick={this.deleteThis}>del</button>
                        <button onClick={this.addSubCategory}>sub</button>
                    </td>
                </tr>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onCategoryClick: setCategoryFilter
    }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(Category);
// function NumberList(props) {     const numbers = props.numbers;     const
// listItems = numbers.map((number) =>       <ListItem key={number.toString()}
// value={number} />     );     return (       <ul> {listItems}  </ul> ); }