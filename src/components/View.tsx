import React from 'react';
import PersonalDetails from '../classes/PersonalDetails';

type ViewProps = {
    personalDetails: PersonalDetails,
}

class View extends React.Component<ViewProps, {}> {
    // constructor(props:|ViewProps) {
    //     super (props);
    // }

    render() {
        const deets = this.props.personalDetails;
        console.log(deets);

        return <div className='view'>
            <h2>Preview</h2>
            <div className='viewContainer'>
                <header>
                    <div className='logo'>
                        <h1>{deets.firstname} {deets.lastname}</h1>
                        <h2>{deets.title}</h2>
                    </div>
                    <h3>{deets.phone}</h3>
                    <h3>{deets.email}</h3>
                    <h3>{deets.location}</h3>
                </header>
            </div>
        </div>;
    }
}

export default View;