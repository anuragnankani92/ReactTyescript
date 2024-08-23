import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import StateComp from './StateComp';
import NewComp from './NewComp';
import StudentComp from './StudentComp';

function App() {

  let asset = 'television'

  let student = {
    name:'anas',
    age:20,
    mob:1234567890
  }

  let arr = [ 'narayan',10,'anshul',true ]

  let arrayOfObject =[
    { name:'pooja', mob:12345678, email:'xyz'  },
    { name:'sakshi', mob:877675, email:'abc'  },
    { name:'twinkal', mob:98897, email:'jj'  }
  ]

  return (
    <div className="App">
      <StudentComp />
      {/* <StateComp  component={ <NewComp /> } /> */}
     {/* <HomePage name='ankit' asset={asset} student={student} arr={ arr } arrayOfObject={arrayOfObject} />  */}
    </div>
  );
}

export default App;
