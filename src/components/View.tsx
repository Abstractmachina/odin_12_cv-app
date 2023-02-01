import React from 'react';
import PersonalDetails from '../classes/PersonalDetails';

type ViewProps = {
    personalDetails: PersonalDetails,
}

type ViewState = {
    value:0,
}

class View extends React.Component<ViewProps, {}> {
    constructor(props:|ViewProps) {
        super (props);
    }

    render() {
        const deets = this.props.personalDetails;
        console.log(deets);

        return <div className='view'>
            <h1>Preview</h1>
            <div className='viewContainer'>
                <header><h1>{deets.firstname} {deets.lastname}</h1></header>
            </div>
        </div>;
    }
}

export default View;