import React,{ Component } from "react";
import PersonalDetails from "../classes/PersonalDetails";

type SectionPersonalProps = {
    changeHandler: (data: PersonalDetails) => void,
}

type SectionPersonalState = {
    deets: PersonalDetails,
}

class SectionPersonal extends Component<SectionPersonalProps, SectionPersonalState> {
    state: SectionPersonalState = {
        deets: new PersonalDetails(),
    }
    constructor(props:SectionPersonalProps){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:any) {
        var data = new FormData(e.target.parentNode);
        const details = this.state.deets;
        details.firstname = data.get("firstName").toString();
        details.lastname = data.get('lastName').toString();
        details.title = data.get('title').toString();
        details.email = data.get('email').toString();
        details.phone = data.get('phone').toString();
        details.location = data.get('location').toString();
        this.setState({
        deets: details,
        })
        this.props.changeHandler(this.state.deets);
    }


    render() {
        return (
        <div className="personalInfo">
            <h3>Personal Details</h3>
            <form name="personalInfoForm" onChange={this.handleChange}>
                <input type='text' id="firstName" name="firstName" placeholder="First Name"/>
                <input type='text' id="lastName" name="lastName" placeholder="Last Name"/>
                <input type='text' id="title" name="title" placeholder="Title"/>
                <input type='text' id="email" name="email" placeholder="email@example.com"/>
                <input type='text' id="phone" name="phone" placeholder="99-999-999-9999"/>
                <input type='text' id="location" name="location" placeholder="Location"/>
            </form>
        </div>
    )}
}

export default SectionPersonal;