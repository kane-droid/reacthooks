# Level two

[react docs for use context](https://react.dev/reference/react/useContext)

### Creating context

1. create the context (CounterContext) for the counter
    2. Create the file "CounterContext" with a .tsx file extension
    3. Create a type variable called "CounterContextType" (This contains all variables and functions we will need to use for the exercise)
        4. CounterContextType will have these variable:
            5. count , number
            6. increment, void function ( ()=>void ) (This is also known as an anonymous function)
            7. decrement, void function ( ()=>void )
    8. create a const variable called "CounterContext" and set it equal to a createContext hook with a type of CounterContextType or undefined with a default value of undefined

1. create a CounterProvider function that takes {children} as an argument (This will be one of two functions we export from this file.)

    1. create a useState hook with a default value of 0 (and type number if you want to be specific, but intellij can infer this.)

    1. create two functions inside CounterProvider, one increasing the count, the other decreasing

    1. return CounterContext.provider component with values equaling to your useState and the two functions your created in earlier steps. This will wrap children (Hint, think about how you prop drill)

1. export a useCounter hook that returns your context. (This allows us to make use of our context provider in our app.)
    2. create an export const function called "useCounter"
    3. create a const variable called context
        4. set that variable equal to useContext that is passed CounterContext (Remember the CounterContext variable we created earlier?)

1. go to main.tsx and wrap app.tsx in your provider

### Creating Components

using the two components provided,add a button for each component. One that will increase the counter, the other decrease.

1. use your custom hook to gain access to the method you're trying to call to modify your context