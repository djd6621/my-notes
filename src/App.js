import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: prevState.isLoggedIn ? false : true
      }
    })
  }

  render() {
    return (
        <div>
          <h1>{this.state.isLoggedIn ? "You are logged in!" : "You are logged out!"}</h1>
          <button type="button" onClick={this.handleClick}>{this.state.isLoggedIn ? "Log Out!" : "Log In!"} </button>
        </div>
    )

  }

}

export default App;
