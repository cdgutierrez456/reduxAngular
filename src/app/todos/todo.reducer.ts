import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { clearTodos, createTodo, deleteTodo, edit, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Matar a Thanostalgico')
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo( text )]),
  on(clearTodos, (state) => state.filter(todo => !todo.completed)),
  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  }),
  on( edit, (state, { id, text }) => {
    return state.map(todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          text
        }
      } else {
        return todo;
      }
    })
  }),
  on(deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {completed}) => state.map(todo => {
    return {
      ...todo,
      completed: completed
    }
  }))
)
