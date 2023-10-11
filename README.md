# Level two

[react docs for use context](https://react.dev/reference/react/useContext)

### Creating context

1. create the context (CounterContext) for the counter

1. create a CounterProvider function that takes {children} as an argument

1. create a use state for the count

1. create two functions inside the Counter provider, one increasing the count, other decrease

1. return CounterContext.provider component with values equaling to your useState and the two functions your created in earlier steps. This will wrap children (Hint, think about how you prop drill)

1. export a useCounter hook that returns your context. (This allows us to make use of our context provider in our app.)

1. go to main.tsx and wrap app.tsx in your provider

### Creating Components

using the two components provided,add a button for each component. One that will increase the counter, the other decrease.

1. use your custom hook to gain access to the method you're trying to call to modify your context