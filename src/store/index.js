import React, {
  Component
} from 'react';

import {
  EventEmitter
} from 'events';

export default class Store extends Component {
  constructor(props) {
    super(props);
    // Main App State
    this.eventEmitter = new EventEmitter();
    // this.eventEmitter.emit
    this.state = {
      appName: 'Weather App'
    }
  }
  render() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ...this.state,
        eventEmitter: this.eventEmitter
      });
    });
  }
}