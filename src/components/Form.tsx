import React, {Component} from "react";
import PersonalInfo from './PersonalInfo'
import WorkExperience from "./WorkExperience";
import Education from './Education'

type FormProps = {
    handlePersonalInfoChange: (data: FormData) => void,
}


class Form extends Component<FormProps, {}> {
    // const {tasks} = props;

    constructor(props:FormProps) {
        super(props);

        this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    }

    handlePersonalInfoChange(formData:FormData) {
        this.props.handlePersonalInfoChange(formData);
    }

render() {
    return (
        <div className="form">
            <h2>Submission Form</h2>
            <div className="formContainer">
            <PersonalInfo changeHandler={this.handlePersonalInfoChange}/>
            <WorkExperience/>
            <Education/>
            </div>
            
            {/* {
                // console.log(tasks);
            tasks.map((task) => {
                return <li key={task.id}>{task.nr}. {task.text}
                    <button id={task.id} onClick={onDeleteItem} >delete</button>
                </li>
            })
            } */}
        </div>
    )}
}

export default Form;