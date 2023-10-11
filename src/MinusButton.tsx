
type MinusButtonProps={
  count:number,
  squareCount:number,
  decrement:()=>void
}

const MinusButton=({count,squareCount,decrement}:MinusButtonProps)=>{
  return(
    <button onClick={decrement}>
      subtract one from count, <br/>count is {count}
      <br/>
      <br/>
      squared count is , {squareCount}
    </button>
  )
}

export default MinusButton;