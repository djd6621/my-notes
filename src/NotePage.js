import React, {Component} from "react";
import Note from "./Note";

/**
 * NotePage Component holds the state for the Note Component to render
 */
class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.addOrRemoveNote = this.addOrRemoveNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handles button for adding and removing notes
     * @param event
     */
    addOrRemoveNote(event) {
        const {name} = event.target;
        if(name === "add") {
            this.setState(prevState => {
                const newNotes = prevState.notes.map(notes => notes);

                let id;
                if(newNotes.length === 0) {
                    id = 0;
                } else {
                    id = newNotes[newNotes.length - 1].key + 1;
                }

                newNotes.push({
                    key: id,
                    note: "",
                    submit: false
                });
                return {notes: newNotes}
            })
        } else {
            const{id} = event.target;
            this.setState(prevState => {
                const newNotes = prevState.notes.filter(notes => notes.key != id);
                return {notes: newNotes}
            })
        }

    }

    /**
     * Handles displaying note text when submit button clicked
     * @param event
     */
    handleSubmit(event) {
        const {id} = event.target;
        this.setState(prevState => {
            const newNotes = prevState.notes.map(notes => {
                if(notes.key == id) {
                    return {
                        key: id,
                        note: notes.note,
                        submit: true
                    }
                }
                return notes
            });
            return {notes: newNotes}
        })
    }

    /**
     * Updates the state when text is entered for a state
     * @param event
     */
    handleChange(event) {
        const {id, value} = event.target;
        this.setState(prevState => {
            const newNotes = prevState.notes.map(notes => {
                if(notes.key == id) {
                    notes.note = value;
                }
                return notes;
            });
            return {notes: newNotes}
        })
    }

    /**
     * Renders h3 or a list of note components
     * @returns {*}
     */
    render() {
        let render;
        if(this.state.notes.length === 0) {
            render = <h3>No Notes have been added</h3>
        } else {
            render =
                <div>
                    {this.state.notes.map(notesObj => {
                        return <span className="notes-span">
                            <Note
                                key={notesObj.key}
                                id={notesObj.key}
                                text={notesObj.note}
                                submit={notesObj.submit}
                                addOrRemove={this.addOrRemoveNote}
                                submitFunc={this.handleSubmit}
                                inputFunc={this.handleChange}
                            />
                        </span>
                    })}
                </div>
        }

        return(
            <div className="page">
                <button className="b" type="button" name="add" onClick={this.addOrRemoveNote}>Add a note</button>
                {render}
            </div>
        )
    }
}

export default NotePage;