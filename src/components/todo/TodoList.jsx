
//TodoList.jsx
// it pulls todos from TodoContext.
// it filters them using FilterContext.
// it renders <TodoItem /> for each todo.

import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { FilterContext } from '../../contexts/FilterContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

 return (
    <div> {filteredTodos.map((todo) => ( <TodoItem key={todo.id} todo={todo} /> ))} </div>
  )

}


export default TodoList;    