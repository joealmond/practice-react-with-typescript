import React from 'react'

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todoItems: Todo[]
}

const TodoList = ({ todoItems }: TodoListProps) => {
  return (
    <ul>
      {todoItems.map((item)=><li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default TodoList