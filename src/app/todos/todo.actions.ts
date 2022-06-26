import { createAction, props } from "@ngrx/store";

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{text: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
)

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{id: number, text: string}>()
)

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{id: number}>()
)

export const toggleAll = createAction(
  '[Todo] Toggle All',
  props<{completed: boolean}>()
)
