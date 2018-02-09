import React from 'react';
import styled from 'styled-components';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

class UndoRedo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSearchStringChange = this
            .handleSearchStringChange
            .bind(this);
        this.handleDoneFilterChange = this
            .handleDoneFilterChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleSearchStringChange(event) {
        this
            .props
            .setNameFilter(event.target.value);
        this.setState({value: event.target.value});
    }
    handleDoneFilterChange(event) {

        this
            .props
            .setDoneFilter(!this.props.showDone);

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        //debugger;
        return (
            <p>
                <FlatButton label="Undo" primary={true} disabled={!this.props.canUndo} onClick={this.props.onUndo}/>
                <FlatButton label="Redo" primary={true} disabled={!this.props.canRedo} onClick={this.props.onRedo}/>
            </p>
        )
    }
}

const mapStateToProps = state => {
    return {
        canUndo: (state.get('categories').past.length)>0,
        canRedo: (state.get('categories').future.length) >0
    }
}

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
  })

const connectedUndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo)

export default styled(connectedUndoRedo)`grid-area: undo-redo;`;