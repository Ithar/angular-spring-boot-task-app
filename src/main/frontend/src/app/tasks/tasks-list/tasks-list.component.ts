import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor() { }

    ngOnInit(): void {
        this.tasks.push(new Task(1, 'task1', '07/07/2020', false ));
        this.tasks.push(new Task(2, 'task2', '07/07/2021', true ));
        this.tasks.push(new Task(2, 'task3', '07/07/2023', false ));
    }

    onTaskChange(event, task) {
        console.log("Boom");
    }

}
