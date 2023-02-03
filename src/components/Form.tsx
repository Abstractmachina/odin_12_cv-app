import React, {FC, ReactElement} from "react";
import SectionPersonal from './SectionPersonal'
import SectionExperience from "./SectionExperience";
import SectionEducation from './SectionEducation'
import Experience from "../classes/Experience";
import PersonalDetails from "../classes/PersonalDetails";
import Education from "../classes/Education";

type FormProps = {
    propagatePersonalInfoChange: (data: PersonalDetails) => void,
    propagateExperienceChange: (items: Experience[]) => void,
    propagateEducationChange: (items: Education[]) => void,

}

const Form: FC<FormProps> = (): ReactElement => {

    //propagate data to parent
    function propagatePersonalInfoChange(deets:PersonalDetails) {
        this.props.propagatePersonalInfoChange(deets);
    };
    function propagateExperienceChange(items:Experience[]) {
        this.props.propagateExperienceChange(items);
    };
    function propagateEducationChange(items: Education[]) {
        this.props.propagateEducationChange(items);
    };

    return (
        <div className="form">
            <h2>Submission Form</h2>
            <div className="formContainer">
            <SectionPersonal changeHandler={propagatePersonalInfoChange}/>
            <SectionExperience changeHandler={propagateExperienceChange}/>
            <SectionEducation changeHandler={propagateEducationChange}/>
            </div>
        </div>
    );
}

export default Form;