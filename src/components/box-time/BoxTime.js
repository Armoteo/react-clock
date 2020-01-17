import React from 'react';
import './BoxTime.scss';

const BoxTime = (props) => {
    return (
        <div className='BoxTime'>
            {props.time.hours}: {props.time.minutes}: {props.time.seconds}  {props.time.noonState}
        </div>
    )
};
export default BoxTime;