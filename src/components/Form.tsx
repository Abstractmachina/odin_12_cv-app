import React, {Component} from "react";
import SectionPersonal from './SectionPersonal'
import SectionExperience from "./SectionExperience";
import SectionEducation from './SectionEducation'
import Experience from "../classes/Experience";
import PersonalDetails from "../classes/PersonalDetails";

type FormProps = {
    propagatePersonalInfoChange: (data: PersonalDetails) => void,
    propagateExperienceChange: (items: Experience[]) => void,
}

type FormState = {
    workItems: Experience[],
}


class Form extends Component<FormProps, FormState> {
    // const {tasks} = props;


    constructor(props:FormProps) {
        super(props);


        this.propagatePersonalInfoChange = this.propagatePersonalInfoChange.bind(this);
        this.propagateExperienceChange = this.propagateExperienceChange.bind(this);
    }

    //propagate data to parent
    propagatePersonalInfoChange(deets:PersonalDetails) {
        this.props.propagatePersonalInfoChange(deets);
    }

    //propgate data to parent
    propagateExperienceChange(items:Experience[]) {
        console.log("Form.propgateExperienceChange()");
        this.props.propagateExperienceChange(items);
    }

render() {
    return (
        <div className="form">
            <h2>Submission Form</h2>
            <div className="formContainer">
            <SectionPersonal changeHandler={this.propagatePersonalInfoChange}/>
            <SectionExperience changeHandler={this.propagateExperienceChange}/>
            <SectionEducation/>
            </div>
        </div>
    )}
}

export default Form;