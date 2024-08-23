
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './config'

type ApiData = {
    firstname:string
    email: string
    password: string

}

function StudentComp() {
    const [student, setStudent]= useState <ApiData []> ([])

    let data ={
        firstname:'',
        email:'',
        password:''
    }
    const [formData, setFormData]=useState(data)

    useEffect(()=>{
        axios.get(`${BASE_URL}/students`)
        // axios.get('https://633e7f1783f50e9ba3b1cef1.mockapi.io/students')
        .then((res)=>{
            console.log(res.data)
            setStudent(res.data)
        })
    },[])

    console.log(formData,'formdataaa')

    // we can also use "e:any"
    const handelChange=((e: ChangeEvent <HTMLInputElement>)=>{
        setFormData( { ...formData,[e.target.name]: e.target.value } )

    })

    // we can also use "e:any"
    const handelSubmit=((e: FormEvent )=>{
        e.preventDefault();
        axios.post(`${BASE_URL}/students`,formData)
        .then((res)=>{
            console.log(res.data)
            setStudent( [ ...student, res.data] )
        })

    })

    

  return (
    <>
    
    <div>StudentComp</div>
    <div style={{display:'flex'}}>
        <table>
        <thead>
            <tr>
                <th>SNO</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map((value, index)=>(
                    <tr>
                        <td> {index + 1} </td>
                        <td> {value.firstname} </td>
                        <td> {value.email} </td>
                        <td> {value.password} </td>
                    </tr>

                ))
            }
           
        </tbody>
    </table>

    <form onSubmit={handelSubmit} >
        <h1>Student Data </h1>
        <label>First Name:</label>
        <input 
        type='text' 
        placeholder='Enter Your Name' 
        name='firstname' 
        value={formData.firstname}
        onChange={handelChange}
         /> <br />
          <label>Email:</label>
        <input 
        type='text' 
        placeholder='Enter Your Name' 
        name='email' 
        value={formData.email}
        onChange={handelChange}
         /><br />
          <label>Password:</label>
        <input 
        type='text' 
        placeholder='Enter Your Name' 
        name='password' 
        value={formData.password}
        onChange={handelChange}
         /><br />
         <input type='submit' />
    </form>
    </div>
    
    </>
  )
}

export default StudentComp