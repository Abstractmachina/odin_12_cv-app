import React,{ Component } from "react";

type PersonalInfoProps = {
    changeHandler: (data: FormData) => void,
}



class PersonalInfo extends Component<PersonalInfoProps, {}> {
    constructor(props:PersonalInfoProps){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:any) {
        var formData = new FormData(e.target.parentNode);
        this.props.changeHandler(formData);
    }


    render() {
        return (
        <div className="personalInfo">
            <h2>Personal Details</h2>
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

export default PersonalInfo;