import React, { useState } from 'react'

interface CompProp {
    component: React.ReactNode
}
interface MyData {
    name: string
    email: string
}

function StateComp(props:CompProp ) {
    const [count, setCount]=useState(0);
    
    const [data, setData]=useState <MyData> ()

   

    const increment=()=>{
        setCount( count + 1 )
    }

    const decrement=()=>{
        setCount( count - 1 )
    }

    const myData=()=>{
            setData({
                name:'pawan',
                email:'xyz'
            })
       
       
    }


  return ( 
    <>
    <div>StateComp</div>
    <h1> {props.component} </h1>

    <h1> {count} </h1>
    <button onClick={increment}> Increment </button>
    <button onClick={decrement} > Decrement </button>

    </>
  )
}

export default StateComp