# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Steps

### Step1

folder app -> store.js 
```jsx
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({})
```

### step2

- Import createSlice,nanoid(used for generationg seperate ids)
```jsx
import { createSlice,nanoid } from "@reduxjs/toolkit";

```
- define an initial state
- initialState is given
```jsx 
const initialState = {
    todos : [{id:1,text:"Hello world"}]
}

```

- use createSlice to create a slice and store it in variable
- create a name for a slice
- name:

```jsx
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,text} = action.payload
            const todo = state.todos.find((todo)=>todo.id === id)
            if(todo){
                todo.text = text;
            }
        },
    }
})

```

**reducer**
- Property
- functions


- Now in function there are two values/parameters
- state,actions
1. state :- gives hand to hand situation of the initail state
2. actions :- the values we get before implementing the functions

- in functions you can make changes by changing the state by
> state.(array that you initialized)

- export the functions and quate them with the slice you created above

*Basically used in components*
```jsx
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
```

also export the reducers as well of the slice you created
```jsx
export default todoSlice.reducer
```

### Step 3 

Go back to store.js
import the reducers created in features->todo->todoSlice

and export the store variable by giving the reducer

```jsx
import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
```

### Step 4 Dispatcher

Dispatcher:- Uses reducer to store/make changes in the values of store

```jsx
const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const addTodoHandler = (e)=>{
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }
```

### Step 5 useSelector

```jsx
const todos = useSelector(state=>state.todos)
const dispatch = useDispatch()
return(
    <div>Todos</div>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={()=>dispatch(removeTodo(todo.id))}
          >
            X</button>
        </li>
    ))}
)

```