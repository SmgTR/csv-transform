# Csv-transform 
A simple application that allows download a CSV file with job candidates data from TeamTailor API.

### Setup environment

This project requires local .env file in root directory to run correctly.<br>
Required env values:

```
.env
PORT = <APP_PORT>
API_KEY = <TEAMTAILORS_API_KEY>
```

### Run application

Use ```yarn``` to install all project dependencies, then run ```yarn dev``` to start app in development mode.

You can also use docker to run application with ```docker-compose up```

### Usage

Go to `/` and press download button to get CSV file.
