import React from "react";



type ExperienceFormItemProps ={
    id:string,
    changeHandler: (id:string, data: FormData) => void,
}

class ExperienceFormItem extends React.Component<ExperienceFormItemProps, {}> {

    id_:string;

    constructor(props: ExperienceFormItemProps){
        super(props);

        this.id_ = props.id;

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e:any) {
        var formData = new FormData(e.target.parentNode);
        this.props.changeHandler(this.id_, formData);
    }

    render() {
        return (
            <form onChange={this.handleOnChange}>
                    <input type="text" id="company" name="company" placeholder="Company"/>
                    <input type="text" id="role" name="role" placeholder="Role"/>
                    <input type="text" id="from" name="from" placeholder="From"/>
                    <input type="text" id="to" name="to" placeholder="To"/>
                    <input type="text" id="description" name="description" placeholder="Description"/>
                    <button>Delete</button>
            </form>
        );
    }
}

export default ExperienceFormItem;