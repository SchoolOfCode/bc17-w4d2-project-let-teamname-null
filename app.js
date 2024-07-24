import express from 'express';
import helmet from 'helmet';

const app = express();
const port = 8080;

app.use(helmet());

app.get (`/`, (req, res) => {
    res.status(200).send('Hello World!').getHeaders
})

app.listen(port, () => 
    console.log(`Listening to port at ${port}`)
)