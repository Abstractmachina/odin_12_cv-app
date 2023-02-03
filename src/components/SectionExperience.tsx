import React, {FC, ReactElement, useState} from "react";
import Experience from "../classes/Experience";
import ExperienceFormItem from "./ExperienceFormItem";
import * as uniqid from 'uniqid';


type ExperienceProps = {
    changeHandler: (items:Experience[]) => void,
}

const SectionExperience: FC<ExperienceProps> = ( {changeHandler} ) : ReactElement => {

    const [items, setItems] = useState(new Array<Experience>());

    function onExperienceChange(id:string, update:Experience) {
        const ex = _getExperience(id);
        ex.copy(update);
        changeHandler(items);
    };

    function addExperience() {
        const ar = items;
        ar.push(new Experience(uniqid()));
        setItems(ar);
    };

    function deleteExperience(id:string) {
        if (items.length<=1) return;

        const result = items.filter(item => item.id !== id);

        setItems(result);
    };

    function _getExperience(id:string) {
        return items.find(item => item.id === id)
    };

    return (
        <div className="sectionExperience">
            <h3>Work Experience</h3>
            {items.map((item) => {
                return <ExperienceFormItem 
                    key={item.id} 
                    id={item.id}
                    changeHandler={onExperienceChange}
                    deleteHandler={deleteExperience}/>
            })}
            <button id="btn_add" onClick={addExperience}>Add</button>
        </div>
    );

}

export default SectionExperience;