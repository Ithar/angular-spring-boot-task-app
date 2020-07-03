package com.malik.ithar.task.controller;

import com.malik.ithar.task.domain.Task;
import com.malik.ithar.task.service.TaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/task")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public List<Task> listAll() {
        log.info("Listing tasks [size={}]", taskService.list().size());
        return taskService.list();
    }

    @PostMapping(value = "/save")
    public Task saveTask(@RequestBody Task task) {
        log.info("Saving task [id={}]", task.getId());
        return taskService.save(task);
    }

}
