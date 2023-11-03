import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, filter, toggleTodo, deleteTodo }) {
  const filteredTodos = filter === 'completed' ? todos.filter((todo) => todo.completed) : todos;

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
