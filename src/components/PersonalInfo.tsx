import React,{ Component } from "react";

class PersonalInfo extends Component {
    constructor(props :any){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log("personal details changed");
    }


    render() {
        return (
        <div className="personalInfo">
            <h2>Personal Details</h2>
            <form onChange={this.handleChange}>
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