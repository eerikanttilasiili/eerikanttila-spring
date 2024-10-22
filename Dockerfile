# Use the official OpenJDK image as a base image
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your application will run on
EXPOSE 8080

# Command to run the JAR file
CMD ["java", "-jar", "app.jar"]