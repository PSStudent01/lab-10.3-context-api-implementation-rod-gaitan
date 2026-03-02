//import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { FilterProvider } from './contexts/FilterContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

import TodoInput from './components/todo/TodoInput';
import TodoList from './components/todo/TodoList';
import FilterButtons from './components/filters/FilterButtons';
import ThemeToggleButton from './components/theme/ThemeToggleButton';

function AppContent() {
  const { theme } = useContext(ThemeContext);


  return (
    <TodoProvider>
      <FilterProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',            // vertical spacing between sections
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: theme === 'light' ? 'white' : '#222',
            color: theme === 'light' ? 'black' : '#eee',
            fontFamily: 'Arial, sans-serif',
            transition: 'background-color 0.3s, color 0.3s'
          }}>
          <h1 style={{ margin: 0 }}>Todo App</h1>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ThemeToggleButton />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
          <TodoInput />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <FilterButtons />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TodoList />
          </div>

        </div>
      </FilterProvider>
  </TodoProvider >
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}


export default App;