import React from 'react';
import Experience from '../classes/Experience';
import PersonalDetails from '../classes/PersonalDetails';
import Education from '../classes/Education';

type ViewProps = {
    personalDetails: PersonalDetails,
    experiences: Experience[],
    education: Education[],
}

class View extends React.Component<ViewProps, {}> {
    // constructor(props:|ViewProps) {
    //     super (props);
    // }

    render() {
        const deets = this.props.personalDetails;
        const placeholderDescription:string = 'This is a description of my experience. I did some of this, some of that.';

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
                            <div key={item.id} className='experience-item-container'>
                                <div className='main-info'>
                                <h4>{(item.company === '')? 'A Company' : item.company}</h4>
                                <h4>{item.role === '' ? 'My Role' : item.role}</h4>
                                <h5>| {item.from===''?'Start':item.from} - {item.to===''?'End':item.to}</h5>
                                </div>
                                <p>{item.description===''?placeholderDescription:item.description}</p>
                            </div>
                        );
                    })
                }
                </section>
                <section>
                <h2>Education</h2>
                {
                    this.props.education.map(item => {
                        return (
                            <div key={item.id} className='education-item-container'>
                                <div className='main-info'>
                                <h4>{(item.uniName === '')? 'A University' : item.uniName}</h4>
                                <h4>{(item.course === '')? 'My Course' : item.course}</h4>
                                <h4>{item.uniLocation === '' ? 'Location' : item.uniLocation}</h4>
                                <h5>| {item.from===''?'Start':item.from} - {item.to===''?'End':item.to}</h5>
                                </div>
                                <p>{item.description===''?placeholderDescription:item.description}</p>
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