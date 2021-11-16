import {useEffect, useState} from "react";
import './App.css';
import Form from "./components/Form";
import ExpencesList from "./components/ExpencesList";



  

function App() {

  
let DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [showForm, setShowForm] = useState(false);
  const [expences, setExpences] = useState(DUMMY_EXPENSES);
  
  const handleToggle = () => {setShowForm(!showForm)}

  function addExpense(newExpense) {
    setExpences(prevExpences => {
      return [...prevExpences, newExpense];
    });
    
    handleToggle();
  }


  

  return (
    <>
    
    {showForm ?  <Form addExpense={addExpense} handleToggle={handleToggle}/> : <button className="btn btn-info text-white same-width" onClick={handleToggle}>Display Form</button>}
      
    <ExpencesList className='same-width' expences={expences} />
    
    </>
  );
}

export default App;
