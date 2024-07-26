import express from 'express'; // Import the express module
import helmet from 'helmet'; // Import the helmet module for security
import { v4 as uuidv4 } from 'uuid';

const app = express(); // Create an instance of an Express application
const port = 8080; // Define the port number the server will listen on

app.use(express.json());
app.use(helmet()); // Use helmet middleware to enhance security



console.log(`UUID = ${uuidv4()}`)

const getRandomTimestamp = () => {
    const start = new Date(2020, 0, 1).getTime(); // Start date: January 1, 2020
    const end = new Date().getTime(); // End date: current date
    const timestamp = new Date(start + Math.random() * (end - start));
    return timestamp.toISOString();
};

const activities = {
    "data": [
        {
            "id": "9589c497-674c-442d-a569-ef30c3cb9992",
            "activity_submitted": "1721835908783", // Random timestamp
            "activity_type": "Running",
            "activity_duration": "30"
        },
        {
            "id": "6f19f83e-354f-4b3b-82a0-8de802d0e8d8",
            "activity_submitted": "1721835435000", // Random timestamp
            "activity_type": "Cycling",
            "activity_duration": "60"
        },
        {
            "id": "ff078c69-d706-434a-a65c-c14264a8cc9b",
            "activity_submitted": "1721835905483", // Random timestamp
            "activity_type": "Swimming",
            "activity_duration": "15"
        }
    ]
};

console.log(activities);

async function getActivities () {
    return  "data"
}

app.get('/activities', (req, res) => { // Define a route handler for the root URL ('/')
    try { 
        res.status(200).json({
            "error": null, 
            "data": activities
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "error": true, 
            "data": null
        }); 
    }
}); 

app.post(`/activities`, async (req, res) => {
    const newActivity = req.body.newActivity;
    if (!newActivity) {
        res.status(400).json({
            "error": true,
            "data": null
        })
        console.log(newActivity);
        return;
    }
    const activity = await {
        ...newActivity,
        id: uuidv4(),
        activity_submitted: Date.now(),
    }
    activities.push(activity);
    console.log(activity);
    console.log(activities);
    res.status(201).json({
        "error": false,
        "data": activity
    })
});


app.listen(port, () => // Start the server and listen on the defined port
    console.log(`Listening to port at ${port}`) // Log a message to the console indicating the server is running
) ;

// epic 2 user 2 - create a post req.

app.post(`/activites`, (req, res) => {

    const newActivity = rep.body.newActivity;

    if (!newActivity) {
        res.status(400).json({
            "error": true,
            "data": null
        })  
    }

    const activity = {
        ...newActivity,
        id: uuidv4(),
        activity_submitted: Date.now(),
    }

    activities.push(activity);
    console.log(activity);
    console.log(activities);

    res.status(201).json({
        "error": false,
        "data": activity
    })
    
});