import React from "react";
import Education from "../classes/Education";


type EducationFormItemProps ={
    id:string,
    changeHandler: (id:string, data: Education) => void,
    deleteHandler: (id:string) => any,
}


class EducationFormItem extends React.Component<EducationFormItemProps, {}> {
    id_:string;

    constructor(props: EducationFormItemProps){
        super(props);

        this.id_ = props.id;

        this.props.changeHandler(this.id_, new Education(this.id_));

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);

        
    }

    handleOnChange(e:any) {
        var formData = new FormData(e.target.parentNode);

        const ex = new Education(this.props.id);
        ex.uniName = formData.get("company").toString();
        ex.uniLocation = formData.get("role").toString();
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
                    <input type="text" id="uniName" name="uniName" placeholder="University Name"/>
                    <input type="text" id="uniLoc" name="uniLoc" placeholder="University Location"/>
                    <input type="text" id="course" name="course" placeholder="Course"/>
                    <input type="text" id="from" name="from" placeholder="From"/>
                    <input type="text" id="to" name="to" placeholder="To"/>
                    <textarea id="description" name="description" placeholder="Description"/>
                    <button className="btn_del" onClick={this.handleOnDelete}>Delete</button>
            </form>
        );
    }
}

export default EducationFormItem;