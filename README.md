# **TaskIt** 

**Description**

This is a web application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to manage their tasks and to-do lists. This project uses MongoDB Atlas as the database.

**Features**

Create, read, update, and delete tasks
Simple and intuitive user interface
Microservice for sorting by Title

**Installation and Setup**

To run this project locally, you will need to have the following tools installed on your machine:
Node.js (version 12 or higher)
NPM (Node Package Manager)
MongoDB Atlas account
Follow these steps to set up the project:

1. Clone the repository to your local machine using git clone https://github.com/PisethC92/TaskIt-.git
2. Navigate to each project directory and install the dependencies by running npm install
3. Create a .env file in the project root for the server directory and add your MongoDB Atlas connection string. It should look like this:
```makefile
MONGODB_URI=<your-mongodb-uri>
```
4. Start the application by running npm start for server and client. 
    * Run node sorter.js for the microservice directory
6. The application should now be running on http://localhost:3000.

**Contributing**
  
If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive commit messages
4. Push your changes to your forked repository
5. Submit a pull request to the original repository

Acknowledgments
This project was inspired by the many to-do list applications out there, with a focus on simplicity and ease of use.
Thank you to the creators of the MERN stack and MongoDB Atlas for providing the tools to build this project.
