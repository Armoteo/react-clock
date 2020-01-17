import React from 'react';
import './BoxTime.scss';

const BoxTime = (props) => {
    return (
        <div className='BoxTime'>
            {props.time.hours}:{props.time.minutes} {props.id ===0 ? ":" + props.time.seconds:null} {props.time.noonState}
        </div>
    )
};
export default BoxTime;