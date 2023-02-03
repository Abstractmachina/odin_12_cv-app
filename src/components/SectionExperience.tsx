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
        this.deleteExperience = this.deleteExperience.bind(this);
    }

    onExperienceChange(id:string, update:Experience) {
        const ex = this._getExperience(id);
        ex.copy(update);
        this.props.changeHandler(this.state.items);
    }

    addExperience() {
        const ar = this.state.items;
        ar.push(new Experience(uniqid()));
        this.setState({
            items: ar,
        });
    }

    deleteExperience(id:string) {
        const ar = this.state.items;
        if (ar.length<=1) return;

        const result = ar.filter(element => element.id !== id);

        this.setState({
            items: result,
        })
    }

    _getExperience(id:string) {
        return this.state.items.find(element => element.id === id)
    }

    render() {
        const { items} = this.state;
        return (
            <div className="sectionExperience">
                <h3>Work Experience</h3>
                {items.map((item) => {
                    return <ExperienceFormItem 
                        key={item.id} 
                        id={item.id}
                        changeHandler={this.onExperienceChange}
                        deleteHandler={this.deleteExperience}/>
                })}
                <button id="btn_add" onClick={this.addExperience}>Add</button>
            </div>
        );
    }
}

export default SectionExperience;