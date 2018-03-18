import React from 'react';
import { MinerFetch } from './MinerFetch';

export class LoginScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      token: "",
      showInputs: true,
      success: false
    };
   }

   handleSubmit(event){ 
    event.preventDefault();
    
    this.state.showInputs = false;
    //Auth
    return fetch('http://192.168.0.199:7000/api-auth/', {
     method: 'post',
     headers: {
       'Content-Type':'application/json'
     },
     body: JSON.stringify({
      "username": 'mmojzis',//this.username.value,
      "password": 'password55'//this.password.value
      })
      })
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        return {
          'data': responseData,
          'success': response.ok
        } 
      })
      .then(returnData => {
        console.log(returnData.data.token)
        console.log(returnData.success)
        this.setState({'success' : returnData.success, 'token': returnData.data.token})
      }
    ); 
  }

   render () {
     return(
       <div>
         <div className='input-group'>
           <form onSubmit={this.handleSubmit}>
               <input className='form-control' ref={(ref) => {this.username = ref}} style={{display: this.state.showInputs ? 'block' : 'none' }} placeholder="user name" type="text" name="username"/><br />
               <input className='form-control' ref={(ref) => {this.password = ref}} style={{display: this.state.showInputs ? 'block' : 'none' }} placeholder="password" type="password" name="password"/><br />
               <button id="btn" style={{display: this.state.showInputs ? 'block' : 'none' }} type="Submit">Start</button>
           </form>
         </div>
         {this.state.success && <MinerFetch token = {this.state.token} />}
       </div>      
    );
   } 
}

export default LoginScreen;