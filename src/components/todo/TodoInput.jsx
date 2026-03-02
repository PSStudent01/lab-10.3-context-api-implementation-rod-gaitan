//TodoInput.jsx

import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

function TodoInput() {
     const [text, setText] = useState('');  //temporary input that hasn’t been saved to context yet.



}


return (
    <form>
        <input
        value={text}
        placeholder="Add new todo..."
        onChange={(e) => setText(e.target.value)}
      />
    </form>




)