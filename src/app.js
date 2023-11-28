const { error } = require("console");
const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();


const authenticationRoutes = require('./routes/authentication/index')
const contestRoutes = require('./routes/Contests')
const updateParticipant = require('./routes/ParticipantUpdate');
const seeDetails = require('./routes/SeeDetails');
const ceateUsers = require('./routes/Users');
const getAdmin = require('./routes/GetAdmin');
const getUsers = require('./routes/GetUsers/index');
const paymentIntent = require('./routes/paymentIntent');
const getCarts = require('./routes/Carts');
const payements = require('./routes/Payments');
const addCarts = require('./routes/PostCarts');
const delteContest = require('./routes/deleteContest');
const addContest = require('./routes/AddContest');
const getCreateContest = require('./routes/GetCreateContest')


applyMiddleware(app)

app.use(authenticationRoutes);
app.use(contestRoutes);
app.use(updateParticipant);
app.use(seeDetails);
app.use(ceateUsers);
app.use(getAdmin);
app.use(getUsers);
app.use(paymentIntent);
app.use(getCarts);
app.use(payements)
app.use(addCarts);
app.use(delteContest);
app.use(addContest);
app.use(getCreateContest);

// test





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

// const main = async()=>{
// await connectDB()
//     app.listen(port, () => {
//         console.log(`assignment12 Server is running on port ${port}`);
//     })
// }
// main();

module.exports= app;


 // "start": "node src/app.js",
    // "dev": "nodemon src/app.js",