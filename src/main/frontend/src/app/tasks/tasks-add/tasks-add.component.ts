import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    // ng model hook
    addTaskValue: String = '';

    constructor(private taskService: TaskService) {

    }

    ngOnInit(): void {
    }

    onAddTask(event) {
        const completed : boolean = false;
        const task: Task = new Task(event.target.value, "07/07/2020", completed);
        this.taskService.saveTask(task, completed).subscribe(
            (addedTask: Task) => {
                this.addTaskValue = '';
                this.taskService.taskAddedEvent.emit(addedTask);
            }
        );
    }
}
