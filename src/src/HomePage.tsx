import React from 'react'

interface PropData {
    name: string
    asset: string

    student:{
      name:string
      age:number
      mob:number
    }
    arr:( string | boolean | number )[]

    arrayOfObject:{
      name:string
      mob: number
      email: string
      age?: number
    }[]
}

function HomePage(props: PropData) {

    let fname: string = 'narayan'
    // fname = 10

    console.log(fname)
    let boolen = true;
    // boolen = 'false'
    console.log(boolen)

    let fruit: any = 'mango'
    fruit = true
    console.log(fruit)

    interface ObjType {
        name: string;
        age: number;
        location: string;
        status: boolean;
        contact?: number
    }

    let obj: ObjType ={
        name:'ajay',
        age:23,
        location:'indore',
        status: true
    }

console.log(obj.name)

  return (
    <>
    <h1>HomePage</h1>
    <h1>Hello, My name is {obj.name} and </h1>
    <h1>My friend name is {props.name} </h1>
    <div style={{border:'2px solid black', height:'300px', width:'500px', marginLeft:'35%'}} >
      <h1> My name is { props.student.name } </h1>
      <h1> My age is  { props.student.age } </h1>
      <h1> and my contact is { props.student.mob } </h1>

      { props.arr }
     
      <div>
        {
          
          props.arrayOfObject.map((value)=>( 
            <div> { value.name } </div>
          ))
        }
      </div>

    </div>
    </>

  )
}

export default HomePage