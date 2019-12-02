
import React, {Component} from "react";
import NotePage from "./NotePage";

/**
 * Main App render
 */
class App extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Main page of application rendered
     * @returns div with a header and NotePage component
     */
    render() {
        return (
            <div>
                <h1>Notes</h1>
                <hr/>
                <NotePage />
            </div>
        )
    }
}

export default App;

