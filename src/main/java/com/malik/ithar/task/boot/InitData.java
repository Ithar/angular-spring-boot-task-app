package com.malik.ithar.task.boot;

import com.malik.ithar.task.domain.Task;
import com.malik.ithar.task.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class InitData {

    @Bean
    CommandLineRunner commandLineRunner(TaskService taskService) {

        return (args) -> {
            taskService.save(new Task(1L, "Advanced Angular Course", LocalDate.now(), false));
            taskService.save(new Task(2L, "Aws Certification", LocalDate.now(), false));
            taskService.save(new Task(3L, "Azure Developer", LocalDate.now(), false));
        };
    }

}
