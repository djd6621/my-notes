import React, {Component} from "react";

class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.setState({
            text: value,
            submit: false
        })
    }

    handleSubmit() {
        this.setState(prevState => {
            const {text} = prevState;
            return {
                text: text,
                submit: true
            }
        })

    }


    render() {
        let render;
        const notes = this.state.submit ? this.state.text : "";
        if(this.state.submit) {
            render = <div>{notes}</div>;
        } else {
            render =
                <div>
                    <input type="text" name="notes" placeholder="Write your notes here!!" onChange={this.handleChange} />
                    <br/>
                    <button id="b3" type="button" onClick={this.handleSubmit}>Enter your notes!</button>
                </div>
        }
        return (
            <div>
                {render}
            </div>
        )
    }


}

export default Notes;