import React from 'react'

interface propType{
    lbl:String,
    isRequired:boolean,
    type:any,
    name:any,
    placeholder?:any,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value:any,
    error:any,
    options?:String[],
    values?:any,
    index:any

}

function Input({lbl,isRequired,type,name,placeholder,handleChange,value,error,options,values,index}:propType) {
  function prepareInputControls(){
    switch(type){
      case "text":
      case "password":
        return  <input key={index} className='form-control' value={value} type={type} name={name} placeholder={placeholder} onChange={handleChange}/>
      case"radio":
  
      return<>
      {
        options?.map((opt:any,ind:any)=>{
          return <> <input key={index} type={type} name={name} value={values[ind]}/> <span className='ms-2 me-4'>{opt}</span></>
        })
      }
      </>
    
      }

  }
  return (
    <div className="row mb-3">
        
        <div className='col-5 text-end'>
            <b>{lbl}{isRequired && <span className='text-danger'>*</span>}</b>
        </div>
        <div className='col-3'>
          {prepareInputControls()}
       
        </div>
        <div className='col-4'>
            <b className='text-danger'>{error}</b>
        </div>
        
    </div>
  )
}

export default Input