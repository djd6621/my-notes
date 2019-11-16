// import React, {Component} from 'react';
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: prevState.isLoggedIn ? false : true
//       }
//     })
//   }
//
//   render() {
//     return (
//         <div>
//           <form>
//             <input type="text" placeholder="First Name"/>
//             <input type="text" placeholder="First Name"/>
//           </form>
//           <h1>{this.state.isLoggedIn ? "You are logged in!" : "You are logged out!"}</h1>
//           <button type="button" onClick={this.handleClick}>{this.state.isLoggedIn ? "Log Out!" : "Log In!"} </button>
//         </div>
//     )
//
//   }
//
// }
//
// export default App;

// import React, {Component} from "react"
//
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//
//   handleChange(event) {
//       const {name, value} = event.target;
//     this.setState({
//       [name]: value
//     })
//   }
//
//   render() {
//     return (
//         <div>
//           <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange}/>
//           <br/>
//           <input type="text" name="lastName" placeholder="last name" onChange={this.handleChange}/>
//           <h1>{this.state.firstName} {this.state.lastName}</h1>
//         </div>
//     )
//   }
// }
//
// export default App

import React, {Component} from "react";
import Notes from "./Notes";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name} = event.target;
        this.setState(prevState => {
            if(name === "remove") {
                if(prevState.notes.length !== 0) {
                    let newComp = prevState.notes.map(comps => comps);
                    newComp.pop();
                    return {notes: newComp}
                }
            } else {
                let newComp;
                if (prevState.notes.length === 0) {
                    return {notes: [<Notes/>]}
                } else {
                    newComp = prevState.notes.map(comps => comps);
                    newComp.push(<Notes/>);
                    return {notes: newComp}
                }
            }
        })
    }

    render() {
        let notesDisplay;
        if(this.state.notes.length === 0) {
            notesDisplay = "No Notes have been added"
        } else {
            notesDisplay = this.state.notes;
        }
        return (
            <div>
                <button id="b1" type="button" name="add" onClick={this.handleChange}>Add Notes</button>
                <button id="b2" type="button" name="remove" onClick={this.handleChange}>Remove Notes</button>
                <br/>
                {notesDisplay}
            </div>
        )
    }
}

export default App;

