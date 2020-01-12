# Start with a base image containing Java runtime
FROM openjdk:11.0.3-jdk-stretch

# Add Maintainer Info
LABEL maintainer="anas.tayaagi@gmail.com"

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8761 available to the world outside this container
EXPOSE 8761

# The application's jar file
ARG JAR_FILE=target/discovery-service-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} /opt/discovery-service.jar

# Run the jar file
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/opt/discovery-service.jar"]