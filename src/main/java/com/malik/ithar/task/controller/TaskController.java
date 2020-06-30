package com.malik.ithar.task.controller;

import com.malik.ithar.task.domain.Task;
import com.malik.ithar.task.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public List<Task> listAll() {
        return taskService.list();
    }

    @PostMapping
    public Task saveTask(@RequestBody Task task) {
        return taskService.save(task);
    }

}
