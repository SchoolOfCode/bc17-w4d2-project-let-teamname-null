import express from 'express';
const app = express();
const port = 8080;


app.get (`/`, (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(port, () => 
    console.log(`Listening to port at ${port}`)
)