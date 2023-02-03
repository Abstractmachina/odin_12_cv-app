import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View'

import PersonalDetails from './classes/PersonalDetails';
import Experience from './classes/Experience';


type AppState = {
  personal: PersonalDetails,
  experiences: Experience[],
}

class App extends Component<{}, AppState> {
  state: AppState = {
    personal: new PersonalDetails(),
    experiences: new Array<Experience>(),
  }
  constructor(props:any) {
    super(props);


    this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
    this.updateExperiences = this.updateExperiences.bind(this);
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

  render(){
    return (
      <div className='appContainer'>
        <header><h1>CV Builder</h1></header>
        <main>
        <Form 
          propagatePersonalInfoChange={this.updatePersonalDetails}
          propagateExperienceChange={this.updateExperiences}
          />
        <View personalDetails={this.state.personal} experiences={this.state.experiences}/>
        </main>
      </div>
    );
  }
}

export default App;
