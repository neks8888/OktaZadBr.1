import React from 'react'

function Combox({handleChange, uniqueYears}) {
    return (
        <form className="choose-an-year">
          
            <label id="year" htmlFor="year">Choose a year:</label>
             <select className="form-control" id="year" name="year" id="year" onChange={handleChange}>
               
                <option key={Math.random()} value={2019}>2019</option>
                {uniqueYears.map((year)=> <option key={year} value={year}>{year}</option>)}
        
               
            
            </select>
        
           
        </form>
    )
}

export default Combox




