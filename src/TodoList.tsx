import React from 'react'

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todoItems: Todo[];
  onRemoveTodo: (id: number) => void;
}

const TodoList = ({ todoItems, onRemoveTodo }: TodoListProps) => {
  return (
    <ul>
      {todoItems.map((item)=><li key={item.id}>{item.title}
        <button onClick={()=> onRemoveTodo(item.id)}>Delete</button>
      </li>)}
    </ul>
  )
}

export default TodoList