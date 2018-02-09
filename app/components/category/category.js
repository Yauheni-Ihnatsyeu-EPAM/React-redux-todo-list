import React from 'react';

import CleverName from '../cleverName/cleverName';

import {connect} from 'react-redux';
import {setCategoryFilter, addNestedCategory, deleteCategory, renameCategory, setEditTodoFilter} from '../../actions/actions';
import {bindActionCreators} from 'redux';

import {ListItem} from 'material-ui/List';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.toggleRenameMode = this
            .toggleRenameMode
            .bind(this);

        this.deleteThis = this
            .deleteThis
            .bind(this);
        this.chooseCategory = this
            .chooseCategory
            .bind(this);

        this.handleNameChange = this
            .handleNameChange
            .bind(this);
        this.handleOpenDialog = this
            .handleOpenDialog
            .bind(this);
        this.handleCloseDialog = this
            .handleCloseDialog
            .bind(this);
        this.handleNestedNameChange = this
            .handleNestedNameChange
            .bind(this);

        this.state = {
            name: props.name,
            renameMode: false,

            id: props.id,
            openDialog: false
        };
    }
    toggleRenameMode(event) {
        this.setState(prevState => ({
            renameMode: !prevState.renameMode
        }));
    }

    deleteThis() {
        this
            .props
            .deleteCategory(this.props.id);
    }
    chooseCategory() {
        this
            .props
            .setCategoryFilter(this.props);
    }

    addSubCategory() {
        this
            .props
            .addNestedCategory(this.state.nestedName, this.state.id);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleOpenDialog() {
        this.setState({openDialog: true});
    }

    handleCloseDialog() {
        this.setState({openDialog: false});
    }

    handleNestedNameChange(event) {

        this.setState({nestedName: event.target.value});
    }

    handleNestedListToggle(item) {
        this.setState({openNestedList: item.state.open});
    };

    render() {
        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onClick = {
                this.handleCloseDialog
            } />, < FlatButton label = "Submit" primary = {
                true
            }
            onClick = {
                () => {
                    this.addSubCategory();
                    this.handleCloseDialog();
                }
            } />
        ];

        if (this.props.editingTodo) {
            return (
                <ListItem primaryText={this.props.name}>
                    <IconButton
                        tooltip="Edit name"
                        onClick={() => {
                        let temp = this.props.editingTodo;
                        temp.categoryId = this.props.id;
                        this
                            .props
                            .setEditTodoFilter(temp)
                    }}>
                        <FontIcon className="material-icons">
                            reply
                        </FontIcon>
                    </IconButton>
                </ListItem>
            )
        }

        if (this.state.renameMode) {

            return (
                <ListItem>

                    <TextField defaultValue={this.props.name} onChange={this.handleNameChange}/>
                    >
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onClick={() => {
                        this.state.name = this.props.name;
                        this.toggleRenameMode();
                    }}/>
                    <FlatButton
                        label="Submit"
                        primary={true}
                        onClick={() => {
                        this
                            .props
                            .renameCategory(this.props.id, this.state.name);
                        this.toggleRenameMode();
                    }}/>
                </ListItem>) } else {return (
                    <ListItem
                        onClick={this.chooseCategory}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems=
                        {this.props.nestedCategories == undefined ? [] : this .props .nestedCategories .map(item => < CategoryForExport key = { item.id } { ...item } />)}>
                        <Dialog
                            title="Dialog With Date Picker"
                            actions={actions}
                            modal={false}
                            id={this.props.key}
                            open={this.state.openDialog}
                            onRequestClose={this.handleClose}>
                            Enter the name of nested category.
                            <TextField
                                name={this.props.key}
                                defaultValue=""
                                onChange={this.handleNestedNameChange}/>
                        </Dialog>

                        <CleverName
                            name={this.state.name}
                            selected={this.props.id == this.props.choisedCategoryID
                            ? true
                            : false}/>

                        <IconButton tooltip="Edit name" onClick={this.toggleRenameMode}>
                            <FontIcon className="material-icons">
                                edit
                            </FontIcon>
                        </IconButton>
                        <IconButton tooltip="Delete category" onClick={this.deleteThis}>
                            <FontIcon className="material-icons">
                                delete
                            </FontIcon>
                        </IconButton>
                        <IconButton tooltip="Add sub category" onClick={this.handleOpenDialog}>
                            <FontIcon className="material-icons">
                                add
                            </FontIcon>
                        </IconButton>

                    </ListItem>
                )
}
                } }; const mapDispatchToProps = dispatch => {return bindActionCreators({
                    setCategoryFilter,
                    deleteCategory,
                    addNestedCategory,
                    renameCategory,
                    setEditTodoFilter
                }, dispatch);}

                const mapStateToProps = state => {return {
                    choisedCategoryID: state.get('filters').category
                        ? state
                            .get('filters')
                            .category
                            .id
                        : false,
                    editingTodo: state
                        .get('filters')
                         && state
                        .get('filters')
                        .editingTodo
                }
}

                const CategoryForExport = connect(mapStateToProps,
                mapDispatchToProps)(Category); export default CategoryForExport // function
                //NumberList(props) {const numbers = props.numbers;
                // const listItems = numbers.map((number) =>       <ListItem
                // key={number.toString()} value={number} />     );     return (       <ul>
                // {listItems}  </ul> );}