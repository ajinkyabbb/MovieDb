import React,{useState} from "react";

export default defaultVal=>{
  const [state, setState] = useState(defaultVal);
    
  const handleChange= (e) =>{
    setState(e.target.value)
  }
  return[state,handleChange]
}