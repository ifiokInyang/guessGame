import TextField from "./reusables/TestField";
import Button from "./reusables/Button";
import React, {useContext } from "react";
import AppContext from "../AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"



function Config() {

    const {setLower, setUpper, initialValue, setInitialValue, number, setNumber,
      setInitialUpper} = useContext(AppContext);

    const getInput = (e)=>{
      e.preventDefault()
      const { name, value} = e.target
        setInitialValue(
          {...initialValue, [name]:value});
    }
    const updateHigher = (e) =>{
      e.preventDefault()
      const { name, value } = e.target
      setInitialUpper(value)
    }
    const handleClick = (e) => {
      // e.preventDefault()
      if(initialValue.upperBound>initialValue.lowerBound){
      setLower((previous)=> initialValue.lowerBound ==="" 
      ? 
      previous
      : 
      previous=initialValue.lowerBound)
      setUpper((previous)=> initialValue.upperBound ==="" ? previous: previous=initialValue.upperBound)
     
      let upper = initialValue.upperBound
      let lower = initialValue.lowerBound
      console.log("upper is ", upper)
      console.log("lower is ", lower)
      let difference = upper-lower
      let rand = Math.random();
      rand = Math.floor(rand*difference)
      rand = rand+lower
      console.log("rand is ", rand)
      // console.log("difference is ",difference)
      setTimeout(()=>{
        const guessedNumber = Math.floor(Math.random()*(initialValue.upperBound-1))+initialValue.lowerBound
        console.log("guessed number is ", guessedNumber)
      }, 1000)
      const neww = Math.floor(Math.random() * 7) + 3
      
      console.log("new is ", neww)
      setInitialValue({
        lowerBound:"", upperBound: ""
      })

    }
    // else if(initialValue.upperBound === "" && initialValue.lowerBound === ""){
    //   toast("Upper bound and lower bound fields are required")
    // }
    else{
    //   alert("Upper bound must be greater than lower bound")
    toast("Upper bound must be greater than lower bound")
    setInitialValue({
      lowerBound:"", upperBound: ""
    })
    }
  }
 
      
      // e.target.value=""
  
    
  return (
    <div className="config">
       <h3>Game Config</h3>
       <div>
        <div>
         <TextField name={"lowerBound"} value={initialValue.lowerBound} labelValue={"Lower bound:"} handleChange={getInput}/>
        </div>
        <div>
         <TextField name={"upperBound"} value={initialValue.upperBound} labelValue={"Upper bound:"} handleChange={getInput} />
        </div>
        <Button placeholder={"Reset"} onclick={handleClick}/>
       </div>
    </div>

  );
}

export default Config;