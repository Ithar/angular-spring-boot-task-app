# angular-spring-boot-task-app 

Angular 10 task manager app; connected to Spring boot backend.  

#### Features 
- 
- 
-  

## 

## Application Stack

Stack  | version |
--- | --- |  
*Java* | 1.8 
*SpringBoot* |  2.3.1.RELEASE
*Frontend* | Angular 10
*Node* | v12.18.1
*DB* | h2-database (in memory)
*Server* | Tomcat (embedded)
*Build Tool* | Maven
*CI* | CircleCI  
*Code Coverage* | Codecov
*Build env* | (embedded)

## Application Set-up

#### h2
JDBC URL: jdbc:h2:mem:tasks

#### Angular
npm install -g @angular/cli
cd src/main
ng new frontend

## Application Run
cd src/main/frontend
nmp start 

Spring Boot: com.malik.ithar.task.Application.class

## Application URL
http://localhost:8080/api/tasks

http://localhost:4200

## Application profile
-Dspring.profiles.active=unit-tests
-Dspring.profiles.active=integration-tests

## Further enhancements 
