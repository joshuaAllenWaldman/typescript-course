import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';


//Interface defines a new type in this instance, type "Todo"
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // refers to previously created Type
  const todo = response.data as Todo;

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id, title, completed)
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id}
  Has a title  of: ${title}
  Is it completed? ${completed}
  `)
}