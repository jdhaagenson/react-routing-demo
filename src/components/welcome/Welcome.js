import React from 'react';

function Welcome(props) {
    console.log(props.match)
    return (
        <div className="Welcome">
            Hello, {props.name}!
        </div>
    );
}

export default Welcome;