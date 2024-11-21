import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { getTodos } from './services';

interface Todo {
  id: number;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(()=>{
    loadTodos()
  },[])

  const loadTodos = async () => {
    const todosData = await getTodos();
    setTodos(todosData)
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <TodoList todoItems={todos} onRemoveTodo={removeTodo}/>
    </div>
  );
}

export default App;