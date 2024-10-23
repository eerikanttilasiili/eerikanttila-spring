FROM openjdk:17-jdk-slim

WORKDIR /app

ADD target/demo-0.0.1-SNAPSHOT.jar /app/demo.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "demo.jar"]