interface Todo {
    id: number;
    title: string;
  }
  
const url = "https://jsonplaceholder.typicode.com/todos";

export async function getTodos(): Promise<Todo[]> {
    const data = await fetch(url);
    return data.json()
}