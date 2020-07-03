import {HttpClient} from "@angular/common/http";
import {Injectable, EventEmitter} from "@angular/core";
import {Task} from "./task.model";

@Injectable({
    providedIn: 'root'
})
// @Injectable()
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getTasks() {
        console.log('Listing tasks');
        return this.http.get('/api/v1/task');
    }

    saveTask(task: Task, checked: boolean) {
        console.log('Saving task [id=' + task.id + ']');
        task.completed = checked;
        return this.http.post('/api/v1/task/save', task);
    }

    taskAddedEvent = new EventEmitter<Task>();
}
