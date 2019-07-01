import { Component } from '@angular/core';

interface ToDo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListLab1';
  toDoComponent: ToDo[] = [
    {
      task: "Laundry",
      completed: true,
    },
    {
      task: "Workout",
      completed: false,
    },
    {
      task: "Study",
      completed: true,
    },
    {
      task: "Jazz up the linkin",
      completed: false,
    },
    {
      task: "Get new job",
      completed: false,
    },
  ]


}