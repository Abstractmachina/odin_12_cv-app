import React, { FC, ReactElement, useEffect }from "react";
import Experience from "../classes/Experience";



type ExperienceFormItemProps ={
    id:string,
    changeHandler: (id:string, data: Experience) => void,
    deleteHandler: (id:string) => any,
}

const ExperienceFormItem: FC<ExperienceFormItemProps> = ({id, changeHandler, deleteHandler}): ReactElement => {

    const id_:string = id;


        // this.id_ = props.id;

        // this.props.changeHandler(this.id_, new Experience(this.id_));
    useEffect(() => {
        changeHandler(id_, new Experience(id_));
    }, []);


    function handleOnChange(e:any) {
        console.log("ExperienceFormItem: handleOnChange()");
        var formData = new FormData(e.target.parentNode);

        const ex = new Experience(id_);
        ex.company = formData.get("company").toString();
        ex.role = formData.get("role").toString();
        ex.from = formData.get("from").toString();
        ex.to = formData.get("to").toString();
        ex.description = formData.get("description").toString();
  
        changeHandler(id_, ex);
    }

    function handleOnDelete() {
        deleteHandler(id_);
    }

    return (
        <form onChange={handleOnChange}>
                <input type="text" id="company" name="company" placeholder="Company"/>
                <input type="text" id="role" name="role" placeholder="Role"/>
                <input type="text" id="from" name="from" placeholder="From"/>
                <input type="text" id="to" name="to" placeholder="To"/>
                <textarea id="description" name="description" placeholder="Description"/>
                <button className="btn_del" onClick={handleOnDelete}>Delete</button>
        </form>
    );
}

export default ExperienceFormItem;