import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/models/todo.model';
import { ToDoService } from 'src/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  toDoComponent: ToDo[];
  currentText: string;
  filterText: string;

  constructor(
    private _toDoService: ToDoService
  ) { }

  ngOnInit() {
    this.title = 'I forgot what the title was';
    this.toDoComponent = this._toDoService.toDoList;
  }

  filter(text: string) {
    this.toDoComponent = this._toDoService.filter(text);
  }

  add(text: string) {
    this._toDoService.toDoList.push({task: text, completed: false, id: this._toDoService.listLength + 1 || 1});
    this.toDoComponent = this._toDoService.toDoList;
    this.filterText = "";
    console.log(this._toDoService.toDoList);
  }

  deleteItem(item: ToDo) {
    this._toDoService.deleteToDoItem(item);
    this.toDoComponent = this._toDoService.toDoList;
  }

  textChanged() {
    this.filter(this.filterText);
  }

  completeClicked(todo: ToDo) {
    this._toDoService.changeComplete(todo);
    this.toDoComponent = this._toDoService.toDoList;
  }

}