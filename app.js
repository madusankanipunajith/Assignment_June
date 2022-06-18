require("dotenv").config({path: "./config.env"});
const express = require('express');
const errorHandler = require("./middlewares/error");

const app = express();

// Middleware
app.use(express.json());

// mapping the routes 

//app.use('api/student/auth', require('./routes/student/auth'));
app.use('/api/admin/auth', require('./routes/admin/auth'));
app.use('/api/admin/private', require('./routes/admin/private'));
app.use('/api/instructor/auth', require('./routes/instructor/auth'));
app.use('/api/instructor/private', require('./routes/instructor/private'));

app.use(errorHandler); // should be last peice of middleware

const PORT = process.env.PORT || 4000;


const server = app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));



// unhandled rejection management
process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error : ${err}`);
    server.close(()=> process.exit(1));
})