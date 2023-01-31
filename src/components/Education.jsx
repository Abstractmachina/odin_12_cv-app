import { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="education">
                <h2>Education</h2>
                <form>
                <input type="text" id="uniName" name="uniName" placeholder="University Name"/>
                <input type="text" id="uniLoc" name="uniLoc" placeholder="University Location"/>
                <input type="text" id="course" name="course" placeholder="Course"/>
                <input type="text" id="from" name="from" placeholder="From"/>
                <input type="text" id="to" name="to" placeholder="To"/>
                <button type="submit">Delete</button>
                </form>
                |<button id="btn_delete">Delete</button>
            </div>
        );
    }
}

export default Education;