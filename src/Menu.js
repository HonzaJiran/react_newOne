import React from 'react'
import {GraphicCardStatus} from './GraphicCardStatus'
import {MinerStatus} from './MinerStatus'

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'toggleMiners' : false,
      'toggleGpus' : false
    }
  }

  handleMiners() {
    console.log('cus miners');
  }

  handleGpu() {
    console.log('cus Gpus');
  }

  render() {
    return (
      <div>
        {this.props.show && <h3>Zobrazuje</h3>}
      </div>
    );
  }
}

export default Menu;
