import React, {Component} from "react";
import Note from "./Note";

class NoteButtons extends Component {
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
                    return {notes: [<Note key="0"/>]}
                } else {
                    newComp = prevState.notes.map(comps => comps);
                    const lastNotes = newComp[newComp.length - 1];
                    const newKey = lastNotes.key + 1;
                    newComp.push(<Note key={newKey}/>);
                    return {notes: newComp}
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button id="b1" type="button" name="add" onClick={this.handleChange}>Add Notes</button>
                <button id="b2" type="button" name="remove" onClick={this.handleChange}>Remove Notes</button>
                <br/>
            </div>
        )
    }
}

export default NoteButtons;