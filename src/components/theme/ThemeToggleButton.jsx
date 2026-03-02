
import { createContext } from 'react'; //importing the 'createContext' functoin from the React library

// 1) Create the 'Context':
const TodoContext = createContext(); // creates an 'empty context object' to store the 'todo state'

// 2) Create the 'Provider Component':
export function TodoProvider({ children }) { // a) contains/wraps the entire app 
                                             // b) and makes the state available to all child components (any components nested inside this 'TodoProvider' component)



  // 3) Initialize state from 'localStorage' or use 'empty array'
  const [todos, setTodos] = useState(() => {  //a) destructurres teh array from 'useState' hook b) 'todos' = the current state of the 'todo' items array c) the function to update that state)
    const savedTodos = localStorage.getItem('todos'); //here a) it goes into locaStorage, 
                                                    // b)searches for the key 'todos'
                                                    // c) if found, it retrives its value and 
                                                    // d) stores it inside 'savedTodos' for further manipulation 
    return savedTodos ? JSON.parse(savedTodos) : []; // ternary condition where...
                                                    // if 'savedTodos' is truthy (has retrived data), 
                                                    // then convert data from string to array
                                                    // else (if falsy) return 'empty' 
  });

  // 4) Auto-save todos to localStorage whenever they change
  useEffect(() => {                 // being this action is considered a side effect, the 'useEffect' hook is used to run the function for it
    localStorage.setItem('todos', JSON.stringify(todos)); // action being - converting the current state value of teh array(todos) to string & then storing the to localStorage, under its key 'todos'.
  }, [todos]);  // the hook will run only when the array 'todos' chnages

  // ACTIONS: 
  // Add a new todo
  const addTodo = (text) => {   // arrow function that take a param 'text' and stores results in 'addTodo'. When called...
    const newTodo = { //...A) creates an object 'newTodo' with the following properties..
      id: Date.now(), // a unique ID using timestamp
      text: text,     // text that stores the user's input when they type in the input field a new todo item like 'buy milk!' 
      completed: false // initialized as 'false', bc every new todo starts as 'not completed'. 
    };
    setTodos([...todos, newTodo]); //B) the state updater 'setTodos' creates a new array by taking the 'spread operator' (...todos) and adding the new todo item stored in 'newTodo'
  };

  // Toggle completed status. Allows user to toggle change the value for 'todo.completed' object property from 'current' (itc, false) to 'opposite' (itc, true)
  const toggleTodo = (id) => {   // arrow function that takes a param 'id' and stores results in 'toggleTodo'. When called...
    setTodos(todos.map(todo =>   //the setter function 'setTodos' is called to act on the 'todos' state, by looping through EVERY 'todo' item in the 'todos' array
      todo.id === id  // IF the 'id' of the the current 'todo' item (todo.id) IS EQUAL to the 'id ' that is being passed by user....
        ? { ...todo, completed: !todo.completed } //THEN flip 'completed: ' to the opposite of what currently is (itc, true)...
        : todo                                  // ELSE leave 'completed: ' as  unchanged (itc, false)
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {  // arrow function that takes a param 'id' and stores results in 'deleteTodo' (defines teh function). When called...
    setTodos(todos.filter(todo => todo.id !== id)); //the setter function 'setTodos' is called to act on the 'todos' state, by looping through EVERY 'todo' item in the 'todos' array
                                                      // and for each todo in the array (todos) IF 'todo.id' (The ID of the current todo in the loop) IS NOT EQUAL TO 'id' (The ID that was passed into deleteTodo)
                                                      // THEN keep it. 
                                                      // IOWS, "hey remove this 'todo' if its 'id' EQUALS the 'id' we want to delete"
};                                              

  // Edit todo text
  const editTodo = (id, newText) => { // arrow function that takes 2 params 'id' and 'newText' and stores results in 'editTodo' (defines teh function). When called...
    setTodos(todos.map(todo =>   //the setter function 'setTodos' is called to act on the 'todos' state, by looping through EVERY 'todo' item in the 'todos' array.
      todo.id === id              // and for each 'todo' in the array (todos) IF 'todo.id' (The ID of the current todo in the loop) IS EQUAL TO 'id' (The ID that was passed into editTodo).
        ? { ...todo, text: newText } // THEN create a new object (.map() creates the array though above) with new value that was passed to the 'newText' by the user.
        : todo                      // ELSE leave 'todo' unchanged 
    ));
  };

  // Clear all completed todos
  const clearCompleted = () => {   // arrow function that takes no params and stores results in 'clearCompleted' (defines teh function). When called...
    setTodos(todos.filter(todo => !todo.completed));  //the setter function 'setTodos' is called to act on the 'todos' state, by looping through EVERY 'todo' item in the 'todos' array.
                                                      // and for each 'todo' in the array (todos), KEEP this todo if it IS NOT completed  IOWS REMOVE this todo if it IS completed"
  };            

  // value object that will be shared with ALL components that use this context
  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted
  };

  return ( //returns JSX. What the TodoProvider component renders
    <TodoContext.Provider value={value}>  {/* opening tag of the Context Provider component.  The 'TodoContext.Provider' is the component that wraps your app and shares the data' */}
      {children}   {/* prop that represents ALL the components wrapped inside the Provider.  Provider doesn't need to know what's inside it as you decide what to wrap when you use it*/}
    </TodoContext.Provider>
  );
}


/* Custom hook to use the TodoContext
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}
*/

/*
Side effect = anything that affects something outside the component (like saving to localStorage, fetching data, etc.)
Takes 2 arguments:
- A function to run (the effect)
- A dependency array (when to run it)
*/

/*
what does the .map method do?
The .map() method creates a new array by transforming each element of an existing array using a function you provide.
*
const newArray = array.map((element) => {
  // return transformed element
});
- Loops through each item in the original array
- Runs your function on each item
- Returns a new array with the transformed results
- Does NOT modify the original array
*/