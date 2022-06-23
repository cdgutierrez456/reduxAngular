import { createAction, props } from "@ngrx/store";

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{text: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
)
