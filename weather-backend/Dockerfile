# Use Java 21 JDK
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy Maven wrapper and pom.xml first
COPY mvnw .
COPY .mvn/ .mvn
COPY pom.xml .

# Make mvnw executable
RUN chmod +x mvnw

# Pre-download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src ./src

# Package the application
RUN ./mvnw package -DskipTests

EXPOSE 8080
CMD ["java", "-jar", "target/weatherapp-0.0.1-SNAPSHOT.jar"]
