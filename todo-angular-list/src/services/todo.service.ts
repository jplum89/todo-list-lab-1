import { Injectable } from "@angular/core";
import { ToDo } from 'src/models/todo.model';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    toDoList: ToDo[] = [];

    deleteToDoItem(item: ToDo) {
        this.toDoList = this.toDoList.filter(i => i !== item);
    }

    filter(text: string): ToDo[] {
        // sets an empty array
        let lowerCaseList = [];

        // goes through all the items in todo list, makes them lowercase, and adds them to the lowerCaseList array
        this.toDoList.forEach(item => {
            let i = {
                id: item.id,
                task: item.task.toLowerCase(),
                completed: item.completed
            }
            lowerCaseList.push(i);
        });

        // this finds the items in the lowerCaseList array that contain the letters in the text
        let newList = lowerCaseList.filter(word => {
            return word.task.includes(text)
        });

        // this makes an empty array called finalList
        let finalList = [];

        // for each item in the newList array it sees if that id is in the main toDoList array and returns that value
        newList.forEach(item => {
            let it = this.toDoList.find(i => i.id === item.id);
            finalList.push(it);
        })
        return finalList;

    }

    changeComplete(todo) {
        this.toDoList.forEach(td => {
            if (td === todo) {
                td.completed = true;
            }
        })
    }

    get listLength() {
        let item = this.toDoList[this.toDoList.length - 1];
        if (!item) {
            return 0;
        }
        return item.id;
    }



}