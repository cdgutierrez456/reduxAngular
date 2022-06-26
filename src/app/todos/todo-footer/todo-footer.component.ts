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

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('filter').subscribe((filter) => this.actualFilter = filter)

  }

  filterSelected(filter: string) {
    this.store.dispatch(setFilter({filter}))
  }

}
