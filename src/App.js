import React from 'react'
import { LoginForm } from './LoginForm'
import { Menu } from './Menu'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'toggleLogin' : true,
      'toggleMenu' : false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    //console.log(username);
    console.log(this);
    this.setState({
      'toggleLogin' : false,
      'toggleMenu' : true
    })
    console.log(this.textInput.value);
  }

  render() {
    return (
      <div>
        <LoginForm username={(input) => this.textInput = input} show={this.state.toggleLogin} handleLogin={this.handleLogin} />
        <Menu show={this.state.toggleMenu} />
      </div>
    );
  }
}

export default App;
