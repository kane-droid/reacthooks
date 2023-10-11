# Level four

## Performance hooks

### useMemo

1. create a use memo function called squareCount.
   2. inside the function, should return count * count 
   3. square count should be dependent on count
4. Once complete, run `yarn dev` and test your button to see count and count squared.


### useCallBack

1. create a useCallback function called decrement
   2. inside the function, setCount to (count - 1).
   3. decrement should be dependent on count
4. Using the MinusButton component provided, create  type `MinusButtonProps` with count:number, squareCount:number, and decrement: ()=>void
   1. pass the props into the `MinusButton` function.
   2. fill in the blanks with the proper props in order to complete the function.
3. Back in app.tsx, pass props into the minus button component (yes, this is prop drilling, but only a little. )
4. test the application using yar dev. There should be two buttons, one that increases the count and shows count squared, another that decreases and shows count squared. 