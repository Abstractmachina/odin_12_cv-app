import React from "react";
import Experience from "../classes/Experience";
import ExperienceFormItem from "./ExperienceFormItem";
import * as uniqid from 'uniqid';


type ExperienceProps = {
    changeHandler: (items:Experience[]) => void,
}
type ExperienceState = {
    items: Experience[],
}

class SectionExperience extends React.Component<ExperienceProps, ExperienceState> {

    state: ExperienceState ={
        items: new Array<Experience>(),
    }

    constructor(props:ExperienceProps) {
        super (props);

        this.state.items.push(new Experience(uniqid()));

        this.onExperienceChange = this.onExperienceChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
    }

    onExperienceChange(id:string, formData:FormData) {
        const ex = this._getExperience(id);
        ex.company = formData.get("company").toString();
        ex.role = formData.get("role").toString();
        ex.from = formData.get("from").toString();
        ex.to = formData.get("to").toString();
        ex.description = formData.get("company").toString();
        this.props.changeHandler(this.state.items);
    }

    addExperience() {
        const ar = this.state.items;
        ar.push(new Experience(uniqid()));
        this.setState({
            items: ar,
        });
    }

    _getExperience(id:string) {
        return this.state.items.find(element => element.id === id)
    }

    render() {
        const { items} = this.state;
        return (
            <div className="sectionExperience">
                <h3>Work Experience</h3>
                {/* tasks.map((task) => {
                return <li key={task.id}>{task.nr}. {task.text}
                    <button id={task.id} onClick={onDeleteItem} >delete</button>
                </li>
            }) */}

                {

                items.map((item) => {
                    return <ExperienceFormItem 
                        key={item.id} 
                        id={item.id}
                        changeHandler={this.onExperienceChange}/>
                })
                }
                {/* <ExperienceFormItem changeHandler={this.onExperienceChange}/> */}
                <button id="btn_add" onClick={this.addExperience}>Add</button>
            </div>
        );
    }
}

export default SectionExperience;