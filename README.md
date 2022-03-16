# Vehicle Recall Enhancement

It consists of a front-end app and 4 back-end web apis.

- The front-end app is written in React. 

- 4 back-end web apis are written in different languages/framework (they run independently):

  - API1 is written in  by Mubarak Oseni.

  - API2 is written in  by Katya Batura.

  - API3 is written in Java by Peter Londry.

  - API4 is written in .net 6 by Wu Ding.  



## Running Locally
### Starting the Frontend App
1. Install NodeJS (https://nodejs.org/en/)
2.  Run the following commands:
```
cd /app
npm install
npm start
```
### Starting API 1

### Starting API 2

### Starting API 3 
API 3 is a Java Spring Boot application built using Gradle. 

You must have **Java 11 JDK** installed on your
  computer. (https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html) 

You can build a jar file and run it from the command line:
```
cd api/API3/
gradlew build
java -jar ./build/libs/vrd-api-1.0.0.jar
```
For more information on API 3, see [API 3's README](https://github.com/plondry/vehicle-recall-ui/tree/main/apis/API3)
### Starting API 4
  1. Install Visual Studio 2022 and install .net 6 SDK.
  
  2. Open apis\API4\TCVrdWebApi\TCVrdWebApi.sln in Visual Studio 2022
  
  3. Set the project "TCVrdWebApi" as startup project

  4. Press F5 do run the project "TCVrdWebApi". If you see a browser is launched with http://localhost:3004/swagger/index.html, api4 webapi is running!

- Start up front-end
  
  Please install node.js firstly. 
```
cd /app
npm install
npm start
```



# API1



# API2

# API3
API3 is written in Java and located in apis\API3.

## Endpoints definiton:

Post Endpoint is: http://localhost:3003/v1/api/vehicle-recalls

GetAll Endpoint is: http://localhost:3003/v1/api/vehicle-recalls

GetByValue retrieved Endpoint is: http://localhost:3003/v1/api/vehicle-recalls/search?value=<value>

# API4

API4 is written in .net 6 and located in apis\API4.

The controller file is at .\apis\API4\TCVrdWebApi\TCVrdWebApi\Controllers\VrdProcessorApi4Controller.cs.

## Endpoints definiton:

Post Endpoint is: http://localhost:3004/v1/api/vehicle-recalls

GetAll Endpoint is: http://localhost:3004/v1/api/vehicle-recalls

GetByValue retrieved Endpoint is: http://localhost:3004/v1/api/vehicle-recalls/search?value=<value>


# Front end app

The front end app is written in React.
