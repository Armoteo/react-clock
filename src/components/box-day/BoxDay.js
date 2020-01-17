import React from 'react';



 const BoxDay =(props)=>{

     const {day, month, year} = props.date;
    return(
        <div>
            {day}/{month}/{year}
        </div>
    )
};

export default BoxDay;