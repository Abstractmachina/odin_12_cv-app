import { Component } from "react";

class WorkExperience extends Component {
    constructor(props) {
        super (props);

        this.state = {
            added: false,
        }
    }

    render() {
        return (
            <div className="workExperience">
                <h2>Work Experience</h2>
                <form>
                    <input type="text" id="company" name="company" placeholder="Company"/>
                    <input type="text" id="role" name="role" placeholder="Role"/>
                    <input type="text" id="from" name="from" placeholder="From"/>
                    <input type="text" id="to" name="to" placeholder="To"/>
                    <input type="text" id="description" name="description" placeholder="Description"/>
                    <button type="submit">Save</button>
                </form>
                <button id="btn_delete">Delete</button>
            </div>
        );
    }
}

export default WorkExperience;