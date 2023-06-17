import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

// this is gonna look at environment variable first
const port = process.env.PORT || 3001;

/* you can start configuring your application by adding middleware,
defining routes, and specifying how the application should handle 
incoming HTTP requests. */
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*
The app.use() method is a built-in middleware function in Express 
that is used to mount middleware or sub-applications to specified paths. 
It registers a middleware function or router for every request made to the 
specified path or any subpaths.
*/
app.use("/api/users", userRoutes);

/* app.get method is used to define a route for handling GET requests.
 It takes two parameters: the route path ("/" in this case) and a 
 callback function that defines the behavior when that route is accessed.
 '/': It specifies the route path as the root URL ("/").
 (req, res) => res.send('Server is ready'): This is the callback 
 function that will be executed when a GET request is made to the root URL.
 It takes two parameters: req (request) and res (response). 
 In this case, it uses the res object to send the response back to 
 the client with the message "Server is ready".*/
app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

// app.listen method is used to start the server and make it listen for incoming requests.
app.listen(port, () => console.log(`Server started on port: ${port}`));

// ROUTES
