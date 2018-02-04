import React from 'react';

import CleverName from '../cleverName/cleverName';

import {connect} from 'react-redux';
import {setCategoryFilter, addNestedCategory} from '../../actions/actions';
import {bindActionCreators} from 'redux';

import {ListItem} from 'material-ui/List';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const style = {
    heigth: 12,
    width: 12
};

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
    addSubCategory() {
        this.props.addNestedCategory();
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        if (!this.state.renameMode) 
            return (
                <ListItem
                    onClick={() => {
                    this
                        .props
                        .onCategoryClick(this.props.id);
                }}>

                    <CleverName name={this.state.name} selected={this.props.selected}/>

                    <IconButton tooltip="Edit name" onClick={this.rename}>
                        <FontIcon className="material-icons">
                            edit
                        </FontIcon>
                    </IconButton>
                    <IconButton tooltip="Delete category" onClick={this.deleteThis}>
                        <FontIcon className="material-icons">
                            delete
                        </FontIcon>
                    </IconButton>
                    <IconButton tooltip="Add sub category" onClick={this.addSubCategory}>
                    <FontIcon className="material-icons">
                            add
                        </FontIcon>
                    </IconButton>

                </ListItem>
            )
        else {
            return (
                <ListItem>

                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <button onClick={this.rename}>ren</button>
                    <button onClick={this.deleteThis}>del</button>
                    <button onClick={this.addSubCategory}>sub</button>

                </ListItem>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onCategoryClick: setCategoryFilter,
        addNestedCategory
    }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(Category);
// function NumberList(props) {     const numbers = props.numbers;     const
// listItems = numbers.map((number) =>       <ListItem key={number.toString()}
// value={number} />     );     return (       <ul> {listItems}  </ul> ); }