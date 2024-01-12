import React,{useState} from "react";

export default function useToggle(initialVal=false){
  const [state, setState] = useState(initialVal);

  const handleToggle =() =>{
    setState(!state)
  }

  return[state, handleToggle];
}