import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [lower, setLower] = useState(1)
    const [number, setNumber] = useState(0)
    const [upper, setUpper] = useState(10)
    const [guess, setGuess] = useState("none")
    const [initialValue, setInitialValue] = useState({lowerBound:"", upperBound:""})
    const [initialGuess, setInitialGuess] = useState({guess:""})

    return (
        <AppContext.Provider
          value={{
            lower,
            upper,
            setLower,
            setUpper,
            initialValue, 
            setInitialValue,
            initialGuess, 
            setInitialGuess,
            guess,
            setGuess,
            number,
            setNumber
          }}
        >
          {children}
        </AppContext.Provider>
      );
}
export default AppContext;