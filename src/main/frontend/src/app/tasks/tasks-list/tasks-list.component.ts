import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {

    }

    ngOnInit()  {

        this.taskService.getTasks().subscribe(
            (tasks: any[]) => {
                this.tasks = tasks;
            },
            (error) => {
              console.log(error);
            }
        );

        this.taskService.taskAddedEvent.subscribe(
            (task: Task) => {
                this.tasks.push(task);
                console.log('Task pushed');
            }
        );
    }

    onTaskChange(event, task) {
        this.taskService.saveTask(task, event.target.checked).subscribe();
    }

}
