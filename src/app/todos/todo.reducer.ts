import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Matar a Thanostalgico')
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo( text )])
)
