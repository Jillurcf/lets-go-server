const { error } = require("console");
const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const authenticationRoutes = require('./routes/authentication/index')


applyMiddleware(app)

app.use(authenticationRoutes)

app.get('/health', (req, res) => {
    res.send('assignment12')
})

app.all('*', (req, res, next)=>{
    const error = new Error(`The requested url: is invalid ${req.url}`)
    error.status = 404;
    next(error)
})


app.use((err, req, res, next)=>{
    res.status(error.status || 500).json({
        message:err.message
    })
})

const main = async()=>{
await connectDB()
    app.listen(port, () => {
        console.log(`assignment12 Server is running on port ${port}`);
    })
}
main();
