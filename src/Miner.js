import React from 'react';

export class Miner extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          {
            Array.from(this.props.data).map(miner => {
              return <li>{miner.id}</li>;
            })
          }
        </ul>
      </div>
    );
  }

}

export default Miner;
