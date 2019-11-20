import React, {Component} from "react";

class Note extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        let render;
        if(this.props.submit !== null && this.props.submit) {
            render =
                <table>
                    <tr>
                        <td>{this.props.text}</td>
                        <td><button className="b" name="remove" id={this.props.id} onClick={this.props.addOrRemove}>Remove</button></td>
                    </tr>
                </table>
        } else if(this.props.submit !== null && !this.props.submit) {
            render = <table>
                    <tr>
                        <td><input type="text" name="notes" placeholder="Write your notes here" id={this.props.id} onChange={this.props.inputFunc}/></td>
                        <td><button className="b" id={this.props.id} onClick={this.props.submitFunc}>Enter</button></td>
                        <td><button className="b" name="remove" id={this.props.id} onClick={this.props.addOrRemove}>Remove</button></td>
                    </tr>
            </table>
        }


        return (
            <div className="note">
                {render}
            </div>
        )
    }


}

export default Note;