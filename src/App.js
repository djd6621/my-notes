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
          <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="First Name"/>
          </form>
          <h1>{this.state.isLoggedIn ? "You are logged in!" : "You are logged out!"}</h1>
          <button type="button" onClick={this.handleClick}>{this.state.isLoggedIn ? "Log Out!" : "Log In!"} </button>
        </div>
    )

  }

}

/*export default App;



import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
        <div>
          <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange}/>
          <br/>
          <input type="text" name="lastName" placeholder="last name" onChange={this.handleChange}/>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
        </div>
    )
  }
}

export default App*/

