import React from 'react';
import Experience from '../classes/Experience';
import PersonalDetails from '../classes/PersonalDetails';

type ViewProps = {
    personalDetails: PersonalDetails,
    experiences: Experience[],
}

class View extends React.Component<ViewProps, {}> {
    // constructor(props:|ViewProps) {
    //     super (props);
    // }

    render() {
        const deets = this.props.personalDetails;

        return (<div className='view'>
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
                <section className='view-experiences'>
                    <h2>Work Experience</h2>
                {
                    this.props.experiences.map(item => {
                        return (
                            <div className='experience-item-container'>
                                <div className='main-info'>
                                <h4>{item.company}</h4>
                                <h4>{item.role}</h4>
                                <h5>| {item.from} - {item.to}</h5>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        );
                    })
                }
                </section>
            </div>
        </div>
        );
    }
}

export default View;