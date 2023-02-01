import React, {useState, useEffect, Component} from "react";
import PersonalInfo from './PersonalInfo'
import WorkExperience from "./WorkExperience";
import Education from './Education'



class Form extends Component {
    // const {tasks} = props;

    constructor(props:any) {
        super(props);

        this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    }

    handlePersonalInfoChange(formData:FormData) {
        console.log("Form: personal details change detected");
        console.log(formData);
    }
//     const [tasks, setTasks] = useState(props.tasks);

//     useEffect(() => {
//         setTasks(props.tasks);
//     }, [props])

//     function onDeleteItem (e) {

//         let idx = -1;
//         for (let i = 0; i < tasks.length; i++) {
//             if (tasks[i].id === e.target.id) {
//                 idx = i;
//                 break;
//             }
//         }
//         console.log('id: '+idx);
//         console.log('tasks: '+tasks);
//         console.log('length: ' + tasks.length);
//             setTasks(tasks.splice(idx, 1));
//             console.log(tasks.length);

// }
render() {
    return (
        <div className="form">
            <PersonalInfo changeHandler={this.handlePersonalInfoChange}/>
            <WorkExperience/>
            <Education/>
            
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