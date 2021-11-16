import React, {useState, useHistory} from 'react'



export default function Form(props) {

  const [title, seTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();


  
  function submitEx(e) {
    e.preventDefault();
    if(title && amount && date) {
      const expense = {
        id: "e"+ Math.random(),     
        title,
        amount,
        date: new Date(date)
      }
      props.addExpense(expense);
    
    }
    }
   

  

    return (
        <div>
          <form className="form-styling" onSubmit = {submitEx} >
            <div className="form-group">
              <label htmlFor="title">Title:</label>
                  <input
                    className="form-control"
                    name="title"
                    onChange={(e)=> seTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    id="title"
                  />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                  <input
                    className="form-control"
                    name="amount"
                    onChange={(e)=> setAmount(e.target.value)}
                    value={amount}
                    placeholder="Amount"
                    id="amount"
                  />
                </div>

            <label className="d-block" htmlFor="date">Choose a date</label>
      
               <input className="datepicker d-block" data-date-format="mm/dd/yyyy"
                  type="date"
                  name="date"
                  onChange={(e)=> setDate(e.target.value)}
                  value={date}
                  id="date"
               
               />
        
                
                <input  className="dugmad btn btn-success d-block" type="submit" value="Submit"/>
                
            <button className='dugmad btn btn-danger d-block' onClick={props.handleToggle}>Cancel</button>
          </form>



        </div>
      );
}
