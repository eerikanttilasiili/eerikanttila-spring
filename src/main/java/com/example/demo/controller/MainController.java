package com.example.demo.controller;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;

@RestController
public class MainController {

    private static final Logger logger = LoggerFactory.getLogger(MainController.class);
    private static final String INDEX_FILE_PATH = "frontend/build/index.html";

    @RequestMapping(value = { "/{path:[^\\.]*}", "/", "/{path:^(?!api).*}" }, method = RequestMethod.GET)
    public ResponseEntity<Resource> serveIndex(HttpServletRequest request) throws IOException {
        logger.info("Serving React app for path: {}", request.getRequestURI());
        return serveIndexFile();
    }

    private ResponseEntity<Resource> serveIndexFile() throws IOException {
        Resource resource = new FileSystemResource(new File(INDEX_FILE_PATH));

        if (!resource.exists()) {
            logger.error("Index file not found at: {}", INDEX_FILE_PATH);
            throw new IOException("Index file not found at: " + INDEX_FILE_PATH);
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "text/html")
                .body(resource);
    }
}