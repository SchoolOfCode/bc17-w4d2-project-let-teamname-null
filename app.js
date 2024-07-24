import express from 'express'; // Import the express module
import helmet from 'helmet'; // Import the helmet module for security

const app = express(); // Create an instance of an Express application
const port = 8080; // Define the port number the server will listen on

app.use(helmet()); // Use helmet middleware to enhance security

app.get('/', (req, res) => { // Define a route handler for the root URL ('/')
    
try { 

    res.status(200).send('Hello World!'); // Send a 'Hello World!' response with a 200 status code
} catch (error) {
    console.log(error);
    res.status(500).json({
        "success": false, 
        "payload": null
    }); 
}
}); 


app.listen(port, () => // Start the server and listen on the defined port
    console.log(`Listening to port at ${port}`) // Log a message to the console indicating the server is running
); 