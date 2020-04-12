import React, {
  Component,
  Fragment
} from 'react';
import './index.scss';

export default class BottomSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return ( 
      <Fragment>
        <div className={`bottom-container`}>
        </div>
      </Fragment>
    )
  }
}