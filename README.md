# vehicle-recall-ui

## Running Locally

- Startup each of the APIs -- see below

```
cd /app


```

# API1

```
## Install server dependencies

cd /api/api1
npm install

##Start API1 Server
node server.js

##Open a Browser Client
Open a web browser and go to the URL:http://localhost:3001/v1/api/vehicle-recalls/.

##Request to retrieve ALL data 
http://localhost:3001/v1/api/vehicle-recalls/

##Request to retrieve a single record if provided with a record identifier
http://localhost:3001/v1/api/vehicle-recalls/?manufacturer_recall_no_txt={manufacturer_recall_no_txt}
Example:https://adf0-37-19-212-74.ngrok.io/v1/api/vehicle-recalls/?manufacturer_recall_no_txt=15S26

```

# API2
