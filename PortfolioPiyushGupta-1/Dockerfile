# Use Java 17 base image
FROM openjdk:17-jdk-slim

# Add a volume (optional)
VOLUME /tmp

# Copy the jar file from target folder
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# Run the app
ENTRYPOINT ["java", "-jar", "/app.jar"]
