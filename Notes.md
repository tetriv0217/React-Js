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
