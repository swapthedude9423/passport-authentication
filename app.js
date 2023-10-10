require('./auth/auth');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const body = require('body-parser');
const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');
const UserModel = require('./model/user');
const bodyParser = require('body-parser');

// get username password and cluster from environment
const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const clustur = process.env.CLUSTER_URL;
console.log(clusture);
mongoose.connect(
    `mongodb+srv://${username}:${password}@${clustur}/?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//mongoose.set("useCreateIndex",true);
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", routes);

app.use('/user', passport.authenticate('jwt',{session:false}),secureRoute);

app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.json({err: err})
});

app.listen(3000,() => {
    console.log("server started");
})
