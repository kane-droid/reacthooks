import {createContext, useContext, useState} from "react";

type CounterContextType = {
  count:number,
  increment:()=>void,
  decrement:()=>void,
}
const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({children}) => {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count +1)
  }

  const decrement = () =>{
    setCount(count -1)
  }

  return (
    <CounterContext.Provider value={{count,increment,decrement}}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () =>{
  const context = useContext(CounterContext)
  if(!context){
    throw new Error("useCounter must be used withing counterProvider")
  }
  return context
}