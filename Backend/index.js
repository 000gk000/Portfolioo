require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');
const cors = require('cors')
const connectDb = require("./utils/db");
const router = require("./Router/auth-route");

const app = express();

//handling cors -> then data -> then route -> connection
const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PACH,HEAD",
    Credentials:true,
}

app.use(cors(corsOptions));

// Configure body parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the router for '/authapi' route
app.use('/authapi', router);

// Connect to the database
connectDb();

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
