import {createContext, useState } from 'react'

// 1) Create the 'Context':
const FilterContext = createContext(); // creates an 'empty context object' to store the 'todo state'

// 2) Create the 'Provider Component':
export function FilterProvider({ children }) { // a) contains/wraps the entire app 
                                             // b) and makes the state available to all child components (any components nested inside this 'FilterProvider' component)
                                             // c) states of current filter ('all', 'active', or 'completed')

}

const [filter, setFilter] = useState(() => { 

  // value object that will be shared with ALL components that use this context
  const value = {
    FilterProvider,
    filter,
    setFilter
  }

return ( //returns JSX. What the TodoProvider component renders
    <FilterContext.Provider value={value}>  {/* opening tag of the Context Provider component.  The 'FilterContext.Provider' is the component that wraps your app and shares the data' */}
      {children}   {/* prop that represents ALL the components wrapped inside the Provider.  Provider doesn't need to know what's inside it as you decide what to wrap when you use it*/}
    </FilterContext.Provider>
  );

}