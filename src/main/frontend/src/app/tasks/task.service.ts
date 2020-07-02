import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
// @Injectable()
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get('/api/tasks'); //.map(resp => resp.json());
    }

}