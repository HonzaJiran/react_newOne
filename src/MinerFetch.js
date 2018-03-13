import React from 'react';
import {Miner} from './Miner';

export function MinerFetch(props) {
  const token = props.token

  if ( token === "" || token == null ) {
    return null;
  }

  console.log(token);

  const miners_data = fetch('http://192.168.0.199:7000/api/v1/miner/', {
      method: 'get',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'JWT ' + token
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      return "Tohle je super";
    })
    .catch(err => {
        console.log("fetch error" + err);
    });

  return(
      <div>
        <h1>Tohle je token: {props.token}</h1>
        //{console.log(miners_data)}
      </div>
  );
}

export default MinerFetch;
