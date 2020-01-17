import React from 'react';
import './BoxDay.scss'


const BoxDay = (props) => {
    return (
        <div className='BoxDay'>
            {props.date}
        </div>
    )
};

export default BoxDay;