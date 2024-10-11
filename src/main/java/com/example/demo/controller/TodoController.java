package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.http.HttpServletRequest; // Import from Jakarta

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoRepository todoRepository;
    private static final Logger logger = LoggerFactory.getLogger(TodoController.class);

    @Autowired
    private RestTemplate restTemplate;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping({ "", "/" })
    public Iterable<Todo> getTodos() {
        logger.info("Fetching all todos!");
        return todoRepository.findAll();
    }

    @GetMapping("/test")
    public String getTest() {
        return "Dev!";
    }

    @GetMapping("/message")
    public ResponseEntity<String> getMessage(HttpServletRequest request) {
        // Log the incoming request IP address
        String clientIp = request.getRemoteAddr(); // This should work correctly
        logger.info("Received request from IP: {}", clientIp);

        // Fetch the message from the external endpoint
        String externalMessage = restTemplate.getForObject("http://4.180.6.30/", String.class);

        // Return the fetched message directly as a JSON response
        return ResponseEntity.ok(externalMessage); // This assumes externalMessage is already in JSON format
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Todo createTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }
}
