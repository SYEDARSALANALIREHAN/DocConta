Containerizing a Web Application Using Docker (MultiContainer)

This project demonstrates how to containerize a simple web application using Docker and Docker Compose. The web application is built with Node.js, and it connects to a MySQL database. The project includes:

- A Dockerfile to containerize the Node.js application.
- A docker-compose.yml file to manage multi-container Docker environments (Node.js + MySQL).
- Instructions to build, run, and test the application locally in Docker containers.

 Prerequisites

Before you start, ensure you have the following installed:

- Docker: [Docker Installation Guide](https://docs.docker.com/get-docker/) 
- Docker Compose: [Docker Compose Installation Guide](https://selftuts.in/install-docker-compose-on-linux/)
- Git: [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

 Project Structure

.
├── webapp/
│   ├── Dockerfile            # Dockerfile for building Node.js container
│   ├── server.js             # The main server file for the Node.js application
│   ├── package.json          # Node.js dependencies and scripts
│   └── npm-init/             # Directory for initializing npm project
│
├── docker-compose.yml        # Docker Compose configuration
│   ├── nodejs image          # Node.js container configuration
│   ├── mysql image           # MySQL container configuration
│   └── php-admin image       # PHP Admin container for easier management and visualization
│
└── README.md                 # Project documentation (this file)



- `app/`: Contains the Node.js application files.
- `db/`: Contains the MySQL initialization SQL script for setting up the database.
- `docker-compose.yml`: Docker Compose file to manage the Node.js and MySQL containers.

Step-by-Step Guide

1. Clone the repository

Clone the repository to your local machine using the following command:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Build the Docker Image

Navigate to the `app/` directory and build the Docker image using the `Dockerfile`:

```bash
docker build -t node-app .
```

3. Set Up Docker Compose

The `docker-compose.yml` file is pre-configured to link the Node.js application with the MySQL database. Here is a breakdown of the service setup:

- Node.js Application (app): Exposes port `3000`.
- MySQL Database (db): Exposes port `3306`
- phpmyadmin : Exposes port '8080'

4. Run the Application Using Docker Compose

Once the Docker image is built, you can start both containers using Docker Compose:

```bash
docker-compose up
```

This command will start both the Node.js application and the MySQL database containers. Docker Compose will automatically create the necessary network for both containers to communicate.

5. Access the Application

After the containers are up and running, the web application should be accessible at:

```
http://localhost:3000
```

The Node.js application will be connected to the MySQL database, and you can start interacting with the application.

6. Test the Application

To ensure everything is working correctly, open your browser and navigate to `http://localhost:3000`. You should see the web application’s interface, and the app should be able to interact with the MySQL database.

7. Shut Down the Containers

To stop the containers when you're done, run:

```bash
docker-compose down
```

This will stop and remove all containers, networks, and volumes defined in the `docker-compose.yml` file.

Conclusion

By following this guide, you have successfully containerized a simple web application using Docker and Docker Compose. You’ve also linked the application to a MySQL database, tested it locally, and managed the environment using Docker Compose.
