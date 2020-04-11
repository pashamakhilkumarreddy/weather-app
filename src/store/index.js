import React, {
  Component
} from 'react';

export default class Store extends Component {
  constructor(props) {
    super(props);
    // Main App State
    this.state = {

    }
  }
  render() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...this.state });
    });
  }
}