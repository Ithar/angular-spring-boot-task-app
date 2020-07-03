package com.malik.ithar.task.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Task {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dueDate;

    private boolean completed;
}
