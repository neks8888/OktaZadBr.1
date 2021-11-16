import React from 'react'

function SingleExpence({expence}) {
    const {date,title } = expence;
    let day = new Date(date).getDay()+1;
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var d = new Date(date);
        var monthName = months[d.getMonth()];  
    
    return (
        <div className="stavka">
            <div className='date-full'>
                <span>{date.getFullYear()}{", "}</span>
                <span>{monthName}</span> {" "}
                <span>{day}</span>
            </div>
           
     

            <div className='date-full'>
                <span>{title}</span> 
            </div>
           

        </div>
    )
}

export default SingleExpence
