import React from 'react' 

import styles from "./Button.module.css"


type buttonprop={
    text:any,
    handleClick:()=>void,
    bgcolor:any
}
function Button({text,bgcolor,handleClick}:buttonprop) {
  return (
    <div className='row'>
        <div className="offset-5 col-7 ">
        <button onClick={handleClick} style={{background:bgcolor}} className={`btn px-3  ${styles.button}`}  >{text}</button>
        </div>
       
    </div>
  )
}

export default Button