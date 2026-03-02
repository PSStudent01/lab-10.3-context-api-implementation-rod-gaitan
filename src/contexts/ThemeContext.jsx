import {createContext, useState } from 'react'

// 1) Create the 'Context':
const ThemeContext = createContext(); // creates an 'empty context object' to store the 'todo state'

// 2) Create the 'Provider Component':
export function ThemeProvider({ children }) { // a) contains/wraps the entire app 
                                             // b) and makes the state available to all child components (any components nested inside this 'FilterProvider' component)
                                             // c) states of current filter ('all', 'active', or 'completed')                              
// Initialize state from 'localStorage' or use 'empty array'
  const [theme, setTheme] = useState(() => {  //a) destructurres teh array from 'useState' hook b) 'theme' = the current state of the 'theme' items array c) the function to update that state.
    const savedTheme = localStorage.getItem('theme'); //here a) it goes into locaStorage, 
                                                    // b)searches for the key 'theme'
                                                    // c) if found, it retrives its value and 
                                                    // d) stores it inside 'savedTheme' for further manipulation 
    return savedTheme ? savedTheme : savedTheme; // ternary condition returns based on where...
                                                    // if 'savedTheme' is truthy (has retrived data), 
                                                    // then convert data from string to array (destringify)
                                                    // else (if falsy) return 'empty' 
  });



















}
