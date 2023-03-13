# Sorting Microservice
This repo is for a microservice developed for my partner's task management board application. The purpose of this microservice is to sort the list of tasks in alphabetical order by their title. 

## How to set up 
1. Install Node.js: you must ensure that Node.js is installed in order to run this program. This program was developed using v16.13.0. 

2. Download files: the repo contains both the source file and the package.json file. These can be downloaded as a ZIP file or the repository can be cloned. 

3. Installing dependencies: First, ensure you are in the directory that contains the file. The only package used in this program is 'express'. If you include the package.json file in the directory, then you can simply run 'npm i'. If you do not want to include the package.json, you must run the command 'npm i express'.
*Note: the package.json file includes the entry 'type:module', which is required to run correctly. Alternatively, the filename can be changed to end with '.mjs' instead of '.js'.   

4. Running the program: ensure that the port number listed at the top of the file is not being used by any other service. By default, the port number is set to 5001. To run the program, simply run in the terminal 'node sorter.js' while in the directory that contains the file. The server should now be listening on localhost:5001/sort. 

## Sending Requests and Receiving Data
To send a request, the user must send an HTTP POST request with content type JSON to localhost:5001/sort. The request can be sent through any means, the below example describes a request sent in JavaScript using the Fetch API.

![image](https://user-images.githubusercontent.com/77746571/218550685-9372f366-3ad7-428f-a4a9-a15acc51ffc6.png)

The server is expecting data in the form of an Array containing the objects to be sorted. Therefore, please ensure that the correct data format is passed in the request. If data is sent in other formats, the service might not run correctly. For example, data should be formatted as so:

![image](https://user-images.githubusercontent.com/77746571/218550403-132f0b03-0dd1-45bd-b47b-c24da676f113.png)

The server will respond with JSON data containing the Array and its objects, now sorted by the titles in alphabetical order. For example, the response from the example above:

![image](https://user-images.githubusercontent.com/77746571/218551219-a9cb3e40-86b9-4b16-80f6-b2d34f4dc0a5.png)

This data can then be used by the application to display the tasks on the UI in the order specified by this data. 


## The UML sequence diagram for this service and how it interacts with an application can be viewed below:

![microservice UML](https://user-images.githubusercontent.com/77746571/218552689-2eac8f7f-8d05-4c1a-b249-62eeac5f7b94.png)

