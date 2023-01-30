import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';
// import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        nr: -1,
      },
      tasks: [],
      count: 1,
    }
  }


  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        nr: this.state.count,
      }
    });
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      task: {
        text: '',
        id: uniqid(),
        // nr: this.state.count,
      },
      tasks: this.state.tasks.concat(this.state.task),
      count: this.state.count +=1,
    });
  }

  render(){
    const {task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='"taskInput'>Enter Task</label>
          <input onChange={this.handleChange} value={task.text} type='text' id = 'taskInput'/>
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
