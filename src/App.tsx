import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View'

import PersonalDetails from './classes/PersonalDetails';
import Experience from './classes/Experience';
import Education from './classes/Education';


type AppState = {
  personal: PersonalDetails,
  experiences: Experience[],
  education: Education[],
}

class App extends Component<{}, AppState> {
  state: AppState = {
    personal: new PersonalDetails(),
    experiences: new Array<Experience>(),
    education: new Array<Education>()
  }
  constructor(props:any) {
    super(props);


    this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
    this.updateExperiences = this.updateExperiences.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
  }

  updatePersonalDetails(data: PersonalDetails) {
    this.setState({
      personal: data,
    })
  }

  updateExperiences(items: Experience[]) {
    this.setState({
      experiences: items,
    })
  }

  updateEducation(items: Education[]) {
    this.setState({
      education:items,
    })
  }

  render(){
    return (
      <div className='appContainer'>
        <header><h1>CV Builder</h1></header>
        <main>
        <Form 
          propagatePersonalInfoChange={this.updatePersonalDetails}
          propagateExperienceChange={this.updateExperiences}
          propagateEducationChange= {this.updateEducation}
          />
        <View personalDetails={this.state.personal} experiences={this.state.experiences} education={this.state.education}/>
        </main>
      </div>
    );
  }
}

export default App;
