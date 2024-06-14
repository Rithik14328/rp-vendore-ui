const regExpvaidations:any={
  "REQUIRED":{
    pattern: /./,
    error:"Required field...!!!"
  },
  "EMAIL":{
    pattern: /^[a-zA-Z]{1}[a-zA-Z0-9_$]{0,}@[a-zA-Z]{3,7}\.[a-zA-Z]{2,3}$/,
    error: "Should be a valid email format!!!"
  },
"MIN5CHARS":{
  pattern: /.{5}/,
  error: "Minimum 5 chars!!!"
}
}

function validate(inputControlObj:any){
  const {critera,value}=inputControlObj;
  inputControlObj.error="";
  for(let text of critera){
    const {pattern,error}=regExpvaidations[text]
    if(!pattern.test(value)){
      inputControlObj.error=error;
      break;
    }
  }

}



export function 
formLevelValidations(formControl:any,setFormControl:any){

  const clonedFormControl:any=JSON.parse(JSON.stringify(formControl))
   const dataObj:any={}
  clonedFormControl.forEach((obj:any)=>{
    dataObj[obj.name]=obj.value
       validate(obj)
    })
   const isFormvalid=!clonedFormControl.some((obj:any)=>obj.error)
    setFormControl(clonedFormControl)
    return [isFormvalid,dataObj]
}


export function fieldLevelValidations(eve:any,formControl:any,setFormControl:any){

    const {name,value}=eve.target
    const clonedFormControl:any=JSON.parse(JSON.stringify(formControl))
    const inputControlObj:any=clonedFormControl.find((obj:any)=>{
     return obj.name===name
    })
    inputControlObj.value=value;
    validate(inputControlObj)


    setFormControl(clonedFormControl)
}