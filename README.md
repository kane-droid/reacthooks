# Level three

## useEffect

1. add a useState that is [catImage, setCatImage] = useState("")
1. We left a partially built useEffect in the app.tsx file.
   1. inside the useEffect there is a missing .then statement that sets the cat image.
      2. take a look at the url and figure out what part of the array you need to grab the image and set it.

1. we only want this to run ONCE on page load. if you get a non-stop cat pictures, try to find out why.

1. conditionally render your cat picture(s) under the cat pictures header. 
   2. hint : { useSate && <img> tag  } (This is a condition that will check if both values are truthy)
      3. For more information [conditional render](https://legacy.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)

## add dependency for more cat pictures

1. Remember the counter we made earlier? add that state to your dependency for your useEffect.
2. Click the button to see if a new cat shows up.

