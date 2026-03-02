
// ThemeContext.jsx
import {createContext, useState } from 'react'

// 1) Create the 'Context':
const ThemeContext = createContext(); // creates an 'empty context object' to store the 'todo state'

// 2) Create the 'Provider Component':
export function ThemeProvider({ children }) { // a) contains/wraps the entire app 
                                             // b) and makes the state available to all child components (any components nested inside this 'FilterProvider' component)
                                             // c) states of current filter ('all', 'active', or 'completed')                              
// 3) Initialize state from 'localStorage' or default to 'light'
  const [theme, setTheme] = useState(() => {  //a) destructurres teh array from 'useState' hook b) theme' = the current state value (a string: 'light' or 'dark') c) the function 'setTheme 'to update that state.
    const savedTheme = localStorage.getItem('theme'); //here a) it goes into locaStorage, 
                                                    // b)searches for the key 'theme'
                                                    // c) if found, it retrives its value and 
                                                    // d) stores it inside 'savedTheme' for further manipulation 
    return savedTheme ? savedTheme : 'light'; // ternary condition returns based on where...
                                                    // if 'savedTheme' is truthy (has retrived data), 
                                                    // then keep 'savedTheme' value
                                                    // else (if falsy) return 'Light' IOWs, remain teh same!! 
  });


  // 4) Auto-save theme to localStorage whenever they change
  useEffect(() => {                 // being this action is considered a side effect, the 'useEffect' hook is used to run the function for it
    localStorage.setItem('theme', theme); // action being  storing the 'theme' value to localStorage, under its key 'theme'.
  }, [theme]);  // the hook will run only when the string 'theme' chnages

 // ACTIONS: 
 // Toggle between light and dark themes
  const toggleTheme = () => {    // arrow function that takes no params and stores results in 'toggleTheme' (defines teh function). When called...
    setTheme(theme === 'light' ? 'dark' : 'light'); //the setter function 'setTheme' is called to act on the 'theme' state, with a ternary condition where...   
                                                    // IF 'light' is true, meanning the current state is 'light', THEM switch to state 'dark'
                                                    // ELSE IF 'light' is false return 'light' IOWs, remain teh same!!
  };

 return ( //returns JSX. What the ThemeProvider component renders
    <ThemeContext.Provider value={value}>  {/* opening tag of the Context Provider component.  The 'ThemeContext.Provider' is the component that wraps your app and shares the data' */}
      {children}   {/* prop that represents ALL the components wrapped inside the Provider.  Provider doesn't need to know what's inside it as you decide what to wrap when you use it*/}
    </ThemeContext.Provider>
  );


}
