import { createReducer, on } from "@ngrx/store";
import { setFilter } from "./filter.actions";

export const initialState = 'todos';

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, {filter}) => filter)
)

