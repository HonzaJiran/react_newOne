import React from 'react';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    //this.handleLogin = this.props.handleLogin.bind(this);
  }

  returnForm() {
    if ( this.props.show ) {
      //let username = "";
      //let password = "";

      return (
        <form onSubmit={this.props.handleLogin} className='loginForm'>
          <input type='text' placeholder='username' />
          <br />
          <input type='password' placeholder='password' />
          <br />
          <button type='submit'>Login</button>
        </form>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        { this.returnForm() }
      </div>
    );
  }
}

export default LoginForm;
