import React from 'react';
import Navigation from '../Header/navigation';

function layout(props) {
    return (
        <div>
            <Navigation {...props}/>
            {props.children}
        </div>
    )
}

export default layout
