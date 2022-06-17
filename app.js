require("dotenv").config({path: "./config.env"});
const express = require('express');
const errorHandler = require("./middlewares/error");

const app = express();

// Middleware
app.use(express.json());

// mapping the routes 

app.use(errorHandler); // should be last peice of middleware

const PORT = process.env.PORT || 4000;


const server = app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));



// unhandled rejection management
process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error : ${err}`);
    server.close(()=> process.exit(1));
})