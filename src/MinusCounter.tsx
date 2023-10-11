import {useCounter} from "./CounterContext";



const MinusCounter = () => {

  const {count,decrement} = useCounter()
  return (
    <button onClick={decrement}>
      subtract from count, count is {count}
    </button>
  );
};

export default MinusCounter;