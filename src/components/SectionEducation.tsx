import React from "react";
import Education from "../classes/Education";
import * as uniqid from 'uniqid';
import EducationFormItem from "./EducationFormItem";


type SectionEducationProps = {
    changeHandler: (items:Education[]) => void,
}
type SectionEducationState = {
    items: Education[],
}

class SectionEducation extends React.Component<SectionEducationProps, SectionEducationState > {
    state: SectionEducationState = {
        items: new Array<Education>()
    }
    
    constructor(props:SectionEducationProps) {
        super(props);

        this.state.items.push(new Education(uniqid()));

        this.onExperienceChange = this.onExperienceChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
    }
    
    onExperienceChange(id:string, update:Education) {
        const ex = this._getExperience(id);
        ex.copy(update);
        this.props.changeHandler(this.state.items);
    }

    addExperience() {
        const ar = this.state.items;
        ar.push(new Education(uniqid()));
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
        const items = this.state.items;
        return (
            <div className="education">
                <h2>Education</h2>
                {items.map((item) => {
                    return <EducationFormItem 
                        key={item.id} 
                        id={item.id}
                        changeHandler={this.onExperienceChange}
                        deleteHandler={this.deleteExperience}/>
                })}
                |<button id="btn_add" onClick={this.addExperience}>Add</button>
            </div>
        );
    }
}

export default SectionEducation;