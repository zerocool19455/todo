import './styles.css';
import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach( crearTodoHtml );
//es la version completa de la linea de arriba, al llamar el mismo nombre salvo que cambie lo que esta entre parentesis 
//todoList.todos.forEach( todo=>crearTodoHtml(todo) );

//const newTodo = new Todo ('aprender Javascript');
//todoList.nuevoTodo (newTodo);
 // todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();
console.log('todos',todoList.todos);

//const tarea = new Todo('aprender Javascript!!');

//todoList.nuevoTodo(tarea);

//console.log (todoList);

//crearTodoHtml (tarea);


//localStorage.setItem('mi-key','ABC1234');

//setTimeout(() => {
  //  localStorage.removeItem('my-key');
//}, 1500);

