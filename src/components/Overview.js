import React, {useState, useEffect} from "react";

const Overview = (props) => {
    // const {tasks} = props;

    const [tasks, setTasks] = useState(props.tasks);

    useEffect(() => {
        setTasks(props.tasks);
    }, [props])

    function onDeleteItem (e) {

        let idx = -1;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === e.target.id) {
                idx = i;
                break;
            }
        }
        console.log('id: '+idx);
        console.log('tasks: '+tasks);
        console.log('length: ' + tasks.length);
            setTasks(tasks.splice(idx, 1));
            console.log(tasks.length);

}

    return (
        <ul>
            {
                // console.log(tasks);
            tasks.map((task) => {
                return <li key={task.id}>{task.nr}. {task.text}
                    <button id={task.id} onClick={onDeleteItem} >delete</button>
                </li>
            })
            }
        </ul>
    );
}

export default Overview;