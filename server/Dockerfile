#
# Build stage
#
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY target/server-0.0.1-SNAPSHOT.jar /app/server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","server-0.0.1-SNAPSHOT.jar"]
