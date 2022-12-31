import TextField from "./reusables/TestField";
import Button from "./reusables/Button";
import React, {useContext } from "react";
import AppContext from "../AppContext";

function Play() {

  const {lower, guess, setGuess, setInitialGuess, initialGuess, upper} = useContext(AppContext);
  const handleInput = (e) =>{
    const { name, value} = e.target
    setInitialGuess({
      ...initialGuess,[name]:value})
  }
  const handleClick = () => {
    setGuess(initialGuess.guess)
  }
  return (
    <div className="play">
       <h3>Play!</h3>
       <p>
        {`Guess the number between ${lower} and ${upper}`}
       </p>
       <p>{`Last guess ${guess}` }</p>
       <TextField name={"guess"} labelValue={"Guess:"} handleChange={handleInput} />
       <div>
        <Button placeholder={"Make Guess"} onclick={handleClick}/>
       </div>
       
    </div>
  );
}

export default Play;