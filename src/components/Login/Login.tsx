import React, { useState } from 'react'
import confgi from "./configuration.json"
import Input from '@/reusablecomponents/InputControls/Input/Input'
import Button from '@/reusablecomponents/InputControls/Button'
import { formLevelValidations,fieldLevelValidations } from '@/services/validation'



function Login() {
const [formControl,setFormControl]=useState(confgi)



  const handleClick=()=>{
    const [isFormvalid,dataObj]=formLevelValidations(formControl,setFormControl)
        if(!isFormvalid)return
        alert("sending request to server")
        console.log(dataObj)
      }

  const  handleChange=(eve:any)=>{

    fieldLevelValidations (eve,formControl,setFormControl)
 
  }
  return (
    <div className='container-fluid'>
      <h3 className='text-center my-3'>Login</h3>
      {
        formControl.map((obj,ind)=>{
          return <Input key={ind}  {...obj}  handleChange={ handleChange}/>
        })
      }
    <Button text="Login" handleClick={handleClick}  bgcolor="white"/>
     
    </div>
  )
}

export default Login