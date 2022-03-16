# Vehicle Recall API 

## Understanding the Vehicle Recall application
<a href="https://lucid.app/lucidchart/1856a50d-f929-43c7-88c8-66318d715f91/edit?invitationId=inv_d3500b8e-8cd0-4a9e-b6d7-c343010407c0">See the diagram here</a>

## Running VehicleRecallAPI locally
VehicleRecallAPI is a Spring Boot application built using Gradle following a Hexagonal architecture. You must have Java 11 installed on your 
computer.  You can build a jar file and run it from the command line:

```
git clone https://github.com/plondry/vehicle-recall-ui.git
cd apis/API3
gradlew build
java -jar ./build/libs/vrd-api-1.0.0.jar
```
You can then access VehicleRecallAPI Swagger docs here: http://localhost:3003/swagger-ui/index.html

## Configuration Options
You can modify the behavior of the application with the following JVM Args:
* `server_port`: defaults to `3003`
* `attr_list`: Which attribute to retrieve from the Vehicle Recall Database to enhance to JSON.  Defaults to `systemTypeEtxt,systemTypeFtxt`

To run with new attributes you can provide the attributes as JVM Args.  e.g. 
```
java -Dserver_port=3001 -Dattr_list=categoryEtxt,categoryFtxt -jar ./build/libs/vrd-api-1.0.0.jar
```