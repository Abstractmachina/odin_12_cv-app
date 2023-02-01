import React, { Component } from 'react';
// import uniqid from 'uniqid';
import Form from './components/Form';
import View from './components/View'
// import './App.css';

import './styles/style.scss';

class PersonalDetails {
  firstname: string;
  lastname: string;
  title:string;
  email:string;
  phone:string;
  location:string;  
  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.title = '';
    this.email = '';
    this.phone = '';
    this.location = '';
  }
}

type AppState = {
  personal: PersonalDetails,
}

class App extends Component<{}, AppState> {
  state: AppState = {
    personal: new PersonalDetails(),
  }
  constructor(props:any) {
    super(props);


    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
  }


  // handleChange = (e) => {
  //   this.setState({
  //     task: {
  //       text: e.target.value,
  //       id: this.state.task.id,
  //       nr: this.state.count,
  //     }
  //   });
  // }

  // onSubmitTask = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     task: {
  //       text: '',
  //       id: uniqid(),
  //       // nr: this.state.count,
  //     },
  //     tasks: this.state.tasks.concat(this.state.task),
  //     count: this.state.count +=1,
  //   });
  // }

  handlePersonalInfoChange(data: FormData) {
    const deets = this.state.personal;
    console.log("App: form data detected");
    deets.firstname = data.get("firstName").toString();
    deets.lastname = data.get('lastName').toString();
    deets.title = data.get('title').toString();
    deets.email = data.get('email').toString();
    deets.phone = data.get('phone').toString();
    deets.location = data.get('location').toString();
    this.setState({
      personal: deets,
    })
    console.log(this.state);

  }

  render(){
    // const {task, tasks } = this.state;

    return (
      <div>
        <header>CV Builder</header>
        <Form handlePersonalInfoChange={this.handlePersonalInfoChange}/>
        <View/>
        {/* <form onSubmit={this.onSubmitTask}>
          <label htmlFor='"taskInput'>Enter Task</label>
          <input onChange={this.handleChange} value={task.text} type='text' id = 'taskInput'/>
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} /> */}
      </div>
    );
  }
}

export default App;
