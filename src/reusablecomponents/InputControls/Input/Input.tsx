import React from 'react'

interface propType{
    lbl:String,
    isRequired:boolean,
    type:any,
    name:any,
    placeholder:any,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value:any,
    error:any

}

function Input({lbl,isRequired,type,name,placeholder,handleChange,value,error}:propType) {
  return (
    <div className="row mb-3">
        
        <div className='col-5 text-end'>
            <b>{lbl}{isRequired && <span className='text-danger'>*</span>}</b>
        </div>
        <div className='col-3'>
        <input className='form-control' value={value} type={type} name={name} placeholder={placeholder} onChange={handleChange}/>
        </div>
        <div className='col-4'>
            <b className='text-danger'>{error}</b>
        </div>
        
    </div>
  )
}

export default Input