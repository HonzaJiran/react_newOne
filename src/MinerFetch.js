import React from 'react';
import { Miner } from './Miner';

export function MinerFetch(props) {
  const token = props.token

  if (token === "" || token == null) {
    return null;
  }

  console.log(token);

  let minersData = [];

  fetch('http://192.168.0.199:7000/api/v1/miner/', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + token
      }
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log("fetch error" + err);
  });

  console.log(minersData);

  return ( <
    Miner data = {
      minersData
    }
    />
  );
}

export default MinerFetch;