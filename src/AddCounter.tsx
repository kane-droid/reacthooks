import {useCounter} from "./CounterContext";



const AddCounter = () => {

  const {count,increment} = useCounter()
  return (
    <button onClick={increment}>
      add to count, count is {count}
    </button>
  );
};

export default AddCounter;