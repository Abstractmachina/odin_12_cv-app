import React, { FC }from "react";
import Experience from "../classes/Experience";



type ExperienceFormItemProps ={
    id:string,
    changeHandler: (id:string, data: Experience) => void,
    deleteHandler: (id:string) => any,
}

class ExperienceFormItem extends React.Component<ExperienceFormItemProps, {}> {

    id_:string;

    constructor(props: ExperienceFormItemProps){
        super(props);

        this.id_ = props.id;

        this.props.changeHandler(this.id_, new Experience(this.id_));

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);

        
    }

    handleOnChange(e:any) {
        var formData = new FormData(e.target.parentNode);

        const ex = new Experience(this.props.id);
        ex.company = formData.get("company").toString();
        ex.role = formData.get("role").toString();
        ex.from = formData.get("from").toString();
        ex.to = formData.get("to").toString();
        ex.description = formData.get("description").toString();
  
        this.props.changeHandler(this.id_, ex);
    }

    handleOnDelete() {
        this.props.deleteHandler(this.id_);
    }

    render() {
        return (
            <form onChange={this.handleOnChange}>
                    <input type="text" id="company" name="company" placeholder="Company"/>
                    <input type="text" id="role" name="role" placeholder="Role"/>
                    <input type="text" id="from" name="from" placeholder="From"/>
                    <input type="text" id="to" name="to" placeholder="To"/>
                    <textarea id="description" name="description" placeholder="Description"/>
                    <button className="btn_del" onClick={this.handleOnDelete}>Delete</button>
            </form>
        );
    }
}

export default ExperienceFormItem;