
//TodoItem.jsx
import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';


function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);


    // Editing the Local state 
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (newText.trim()) {
            editTodo(todo.id, newText);
            setIsEditing(false);
        }
    }

    return (

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            {/* Show input if editing */}
            {isEditing ? (
                <input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />) : (<span>{todo.text}</span>)

            }

            {/* Edit / Save button */}
            <button
                onClick={() => {
                    if (isEditing) handleEditSubmit({ preventDefault: () => { } });
                    else setIsEditing(true);
                }}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>


            {/* Delete button */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>

    )

}

export default TodoItem;


/*


            {isEditing && (
                <form onSubmit={handleEditSubmit}>
                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                </form>
            )}

*/


/*

                <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
*/