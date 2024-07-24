import express from 'express'; // Import the express module
import helmet from 'helmet'; // Import the helmet module for security

const app = express(); // Create an instance of an Express application
const port = 8080; // Define the port number the server will listen on

app.use(helmet()); // Use helmet middleware to enhance security 

async function getActivities () {
  return  "data"
}

app.get('/activities', async (req, res) => { // Define a route handler for the root URL ('/')
    try { 
        const activities = await getActivities();
        res.status(200).json( {
         "success": true, 
         "payload": data
        });
   
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
) ; 

