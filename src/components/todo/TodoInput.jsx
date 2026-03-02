//TodoInput.jsx

import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

function TodoInput() {
    const [text, setText] = useState('');  //temporary input that hasn’t been saved to context yet.
    const { addTodo } = useContext(TodoContext); // destructuring function 'addTodo' from 'TodoContext'

    const handleSubmit = (e) => {  //This defines a function called 'handleSubmit' using an arrow function. The event object (e) is automatically passed by the browser when a form is submitted.
        e.preventDefault(); //prevents the page reload automatically when submitting the form, so that we control that byusing React can handle the action in JavaScript instead.
        if (text.trim()) { //'text is the state that stores what the user typed. 'trim' removes the leadin gspaces
            addTodo(text); // this calls the 'addTodo' function from the 'TodoContext' allowing the function to add a new 'todo' item (the current text) to the global todo list of strings.
            setText(''); //resets the input field to empty after submitting. Since the input is controlled by the React state, this clears the text box for the next todo string.
        }

    }

    return (
        <form onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <input
                value={text}
                placeholder="Add new todo..."
                onChange={(e) => setText(e.target.value)}
                style={{ flex: 1, padding: '8px', fontSize: '16px'}}
            />
            <button
                style={{ padding: '8px 16px', fontSize: '16px' }}>Add</button>
        </form>
    )
}

export default TodoInput;