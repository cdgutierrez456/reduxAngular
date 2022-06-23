import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = {
    text: "",
    id: 0,
    completed: false
  };
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  checkCompleted: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();

  editing: boolean = false;

  constructor( private store: Store<AppState> ) {
  }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, [Validators.required])

    this.checkCompleted.valueChanges.subscribe( valor => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text)
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  onBlur() {
    this.editing = false;

    if ( this.txtInput.invalid ) return;
    if ( this.txtInput.value === this.todo.text ) return;

    this.store.dispatch(
      actions.edit(
        {
          id: this.todo.id,
          text: this.txtInput.value
        }
      )
    )
  }

}
