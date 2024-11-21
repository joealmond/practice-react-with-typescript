import data from "./data"

interface Todo {
    id: number;
    title: string;
  }
  
export async function getTodos(): Promise<Todo[]> {
    return data
}