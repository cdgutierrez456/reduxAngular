import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: string = '';
  filters = ['todos', 'completed', 'pending'];

  pending: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completed).length
    })
  }

  filterSelected(filter: string) {
    this.store.dispatch(setFilter({filter}))
  }

}
