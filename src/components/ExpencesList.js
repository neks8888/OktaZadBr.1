import React, {useState} from 'react'
import Combox from './Combox';

import SingleExpence from "./SingleExpence"

function ExpencesList({expences}) {
  const [selectVal, setSelectVal] = useState("");

  const yearsOnly = expences.map((expence) => expence.date.getFullYear());
  
  const uniqueYears = [...new Set(yearsOnly)];

    const handleChange = (e) => {
        setSelectVal(parseInt(e.target.value));
        
    }


    return (
        <div>
           <Combox handleChange={handleChange} uniqueYears={uniqueYears}/>
            {expences.filter((expence)=>expence.date.getFullYear() === selectVal).map((expence)=> <SingleExpence key={expence.id} expence={expence} />
            )}
        </div>
    )
}

export default ExpencesList
