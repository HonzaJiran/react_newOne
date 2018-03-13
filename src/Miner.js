import React from 'react';

export class Miner extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <p>{this.props.data}</p>
      </div>
    );
  }

}

export default Miner;
