import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class Progress extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearProgress className={this.props.className} mode="determinate" value={this.props.percent}/>
    );
  }
}