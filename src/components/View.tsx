import React from 'react';

type ViewProps = {
    message:string,
}

type ViewState = {
    value:0,
}

class View extends React.Component<ViewProps, ViewState> {
    // constructor(props) {
    //     super (props);
    // }

    render() {
        return <div className='cv_view'>

        </div>;
    }
}

export default View;