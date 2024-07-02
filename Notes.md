# Notes 

# 1. React and its definitions
## React and it's parts
- React-dom :- For web Applications
- React-native :- For mobile applications

## Basic Definitions
npx - node package executer

## How to build apps
> - create-react-app {foldername}
> - npm create vite@latest (better)
- // 'no-unused-variable' : [true, {"ignore-pattern": "^_"}], add this in .eslintrc.cls
## How React works

### In create-react-app  
- Root stores the value retured by App.js and renders it by our own tag {/App}
- App return HTML to make it visible on browser.Thats the magic of react(.jsx)
- Then index.html renders the page

#### Role of "react-scripts" in create-react-app
- This make sure that the javascript,app.jsx and other scripts get added to the main index.html page.

### In vite
- Same as create-react-app however the is no "react-scripts" rather script is injected in index.html 

## Vite and its strictness
- Don't import functions with lowerCase letter for eg:- import Chai from './chai' is valid and not chai from './chai'
- use only .jsx to import files.
- You can render only one component that can be enclosed in "<></>" which is called fragment

### However create-react-app doesnt say to make changes but these conventions should be followed and errors happen

## How react elements are created 
- Refer customReact folder
- {} when this is used for function results and variables.This is a "Evaluated expression" i.e It should hold only the final outcome you want to make them see. 

## Why you dont need to inport react library always?
- Babel injects the code itslf under the table.

# 2.Hooks
## Why the value doesn't change using js in App.jsx

- This is because change in UI is handled by react,When a variable changes then all the variable change.

## How to use Hooks

### useState

Use state gives an array,[ firstValueIsVariable,Function ]

> Whole syntax =>let [ variable, setVariable ] = useState()

- Eg1 :-  
```jsx
const [counter, setCounter] = useState(15);
 ```
- Eg2 :- 
```jsx 
const [message, setMessage] = useState("");
```
Then on buttons you can use onclick funtions and Use these variable which gets changed instantnously where used.

## Question on counter (IMPORTANT)

>setCounter returns a callback fucntion
```jsx
const [counter, setCounter] = useState(15);
const addValue = () => {
    // console.log("add value",Math.random());
    // counter = counter + 1;
    if (counter > 19) {
      setMessage("Value above 20");
      console.log(`Value Cant be updated`);
    } else {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setMessage("");
    }
    console.log("clicked", counter);
  };
```
**This code will no will not increment 4 time asit is send in batches and it ends up increaseing the same value 15**

>How to make this work
```jsx
setCounter((prevCounter) => prevCounter+1);
setCounter((prevCounter) => prevCounter+1);
setCounter((prevCounter) => prevCounter+1);
setCounter((prevCounter) => prevCounter+1);
```
*Howerver not a good Practise*

# 3.Tailwind and props
## Props
Props make the component reusable

## How to pass them
The term coined can be known as props

Eg1:- Your component like C
>Card.jsx

```jsx
const Card = (props) => {
    console.log({props});
  return (
    
  );
};

export default Card;
```
> App.jsx
```jsx
import "./App.css";
import Card from './components/Card.jsx'
function App() {
  return (
    <>
      <Card username = "Tejas" btnText = "Best" />
    </>
  );
}
export default App;

```
Now this btnText and username can be passed as values in Card.jsx and used differently
```
{props.username} or {props.btnText}
```
Instead of Text.

If there is no value use this
```
{props.username || "Default text"}
```


# 4. BgColor Project important points
- Remove Import css file tailwind will work abruptly
- The on click method in React expects a function reference
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax

```jsx 
onClick={()=>{setColor("black")}} 
```

- This lets you help to pass parameters

# 5.Takeaways from Password Generator

**useEffect Hook**

**Purpose**: The useEffect hook allows you to perform side effects in function components.

**Usage:**
1. Accepts a function that contains the side-effect logic.
2. Optionally accepts a dependency array to re-run the effect when certain values change.

```jsx

useEffect(() => {
  // side-effect logic
}, [dependency1, dependency2]);

```
**useCallback Hook**

**Purpose**: The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.

**Usage:**
1. Useful to prevent unnecessary re-renders by ensuring functions are not re-created on every render.
2. Accepts a function and a dependency array.

```jsx
import { useCallback, useState, useEffect, useRef } from "react";
const memoizedCallback = useCallback(() => {
  // callback logic
}, [dependency1, dependency2]);
```
**useRef Hook**

**Purpose**:  The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. This object persists for the full lifetime of the component.

**Usage:**
1. Useful for accessing and manipulating DOM elements directly.
2. Can also hold a mutable value that does not cause a re-render when updated.

```jsx
import { useCallback, useState, useEffect, useRef } from "react";
const myRef = useRef(null);
```
**Copy to Clipboard**

**Purpose**:  To copy text programmatically to the clipboard using the browser's Clipboard AP

**Usage:**
1. Use window.navigator.clipboard.writeText to copy a given text to the clipboard.
2. Ensure you select and set the selection range on the input element if required.

```jsx
import { useCallback, useState, useEffect, useRef } from "react";
const copyToClipboard = useCallback(() => {
  inputRef.current?.select();
  inputRef.current?.setSelectionRange(0, 99999); // for mobile devices
  window.navigator.clipboard.writeText(text);
}, [text]);

```

# 6. TakeAways from currencyChanger Project

## Custom Hooks

**Example:** 
>useCurrencyInfo() 

### State Management:

1. Initialize state with useState: const [data, setData] = useState({}).

### Fetching Data:

- Use useEffect to fetch data when the currency changes.
  Update state with the fetched data using setData.
  Handling Dependencies:

- Specify currency in the dependency array of useEffect to refetch data whenever currency changes.
### Error Handling:

- Add error handling in the fetch operation to catch and log errors.

### Code
```jsx
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error('Error fetching currency data:', error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

```


# Take aways from 07react-router-dom
Let's break down the key learning points from each of these files: `GitHub.jsx`, `Layout.jsx`, and `main.jsx`.

### GitHub.jsx
1. **Data Loading with `useLoaderData`**:
   - You’re using `useLoaderData` to fetch data when the route is loaded, which is an efficient way to handle data fetching in React Router.

2. **Component Structure**:
   - The `GitHub` component is using the fetched data (`data`) to display the number of followers and an avatar image from GitHub.

3. **Commented Code for Fetching Data**:
   - You have a commented-out section that demonstrates how to fetch data within a component using `useEffect` and `useState`. This is useful for understanding both client-side data fetching and server-side data loading.

    ```jsx
    import { useEffect, useState } from "react"
    import { useLoaderData } from "react-router-dom";
    export default function GitHub() {
        const data = useLoaderData();
        // const [data, setData] = useState([]);
        // useEffect(() => {
        //     fetch('https://api.github.com/users/tetriv0217')
        //     .then(res => res.json())
        //     .then(data =>{
        //         console.log(data);
        //         setData(data)
        //     })
        // }, [])
        return (
            <>
            <div className="text-center m-4 h-170 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center ">
                Github Followers: {data.followers}
                <img className="object-contain" src={data.avatar_url} alt="Git Picture" width={170} height={170} />
            </div>
            </>
        );
    }

    export const githubInfoLoader = async() =>{
        const res = await fetch('https://api.github.com/users/tetriv0217')
        return res.json()
    ```

### Layout.jsx
1. **Layout Component**:
   - The `Layout` component is a typical layout component that includes a `Header` and a `Footer`, with an `Outlet` for rendering child routes.
   - This demonstrates how to use layout components to encapsulate common page structure and styling.

  ```jsx
  import React from 'react'
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
  import { Outlet } from 'react-router-dom'

  const Layout = () => {
    return (
      <>
          <Header/>
          <Outlet/>
          <Footer/>
          
      </>
    )
  }

  export default Layout
  ```
### main.jsx
1. **React Router Setup**:
   - You've set up React Router using `createBrowserRouter` and `createRoutesFromElements`.
   - The routes are defined within a parent route (`/`) that uses the `Layout` component to wrap all the child routes.

2. **Child Routes**:
   - Child routes are defined for `Home`, `About`, `Contact`, `GitHub`, and `User`.
   - For the `GitHub` route, you've specified a `loader` to fetch data from the GitHub API before rendering the component.
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github, {githubInfoLoader} from "./components/Github/Github"
import User from "./components/User/User";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { 
//         path: "",
//         element:<Home/>
//       },
//       { 
//         path: "about",
//         element:<About/>
//       },
//       { 
//         path: "contact",
//         element:<Contact />
//       },
//       { 
//         path: "github",
//         element:<Github/>
//       },
      
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout />}>
      <Route path="" element = {<Home />}/>
      <Route path="about" element = {<About />}/>
      <Route path="contact" element = {<Contact />}/>
      <Route path="github" 
      loader = {githubInfoLoader}
      element = {<Github />}/>
      <Route path="user/:userid" element = {<User />}/>
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


```
### User.jsx

1. **Importing Necessary Modules**:
   - `useParams` is imported from `react-router-dom`. This hook allows you to access the parameters defined in the route path.

2. **Using `useParams` to Get Route Parameters**:
   - The `User` component calls `useParams()` to get the route parameter `userid`.
   - `const { userid } = useParams()` destructures the `userid` parameter from the object returned by `useParams`.

3. **Displaying the User ID**:
   - The component returns a `div` that displays the `userid` in a styled format.

Here’s the complete `User.jsx` component:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams();
  return (
    <div className='bg-green-500 text-white text-3xl text-center p-4'>
      User: {userid}
    </div>
  );
};

export default User;
```

### Summary

1. **useParams Hook**:
   - The `useParams` hook is used to access URL parameters in a functional component. It returns an object of key/value pairs of the dynamic params from the current URL.

2. **Component Usage**:
   - The `User` component demonstrates how to dynamically display content based on the URL parameter.

3. **Styling**:
   - Inline Tailwind CSS classes are used to style the component, making it easy to apply styles directly in the JSX.

This component is now ready to be used with a route that includes a dynamic `userid` parameter, like `/user/:userid`. If you have further questions or need more details, feel free to ask!