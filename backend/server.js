import express from "express";
import dotenv from 'dotenv';

dotenv.config()

// this is gonna look at environment variable first 
const port = process.env.PORT || 3001;

const app = express()


/* 
 app.get method is used to define a route for handling GET requests.
 It takes two parameters: the route path ("/" in this case) and a 
 callback function that defines the behavior when that route is accessed.
 '/': It specifies the route path as the root URL ("/").
 (req, res) => res.send('Server is ready'): This is the callback 
 function that will be executed when a GET request is made to the root URL.
 It takes two parameters: req (request) and res (response). 
 In this case, it uses the res object to send the response back to 
 the client with the message "Server is ready".
*/
 app.get('/', (req,res) => res.send('Server is ready')); 


// app.listen method is used to start the server and make it listen for incoming requests.
app.listen(port, () => console.log(`Server started on port: ${port}`));


// ROUTES

