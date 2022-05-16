 const express = require('express')
const app = express()
const morgan = require('morgan');
const bodyparser = require('body-parser');
const session = require('express-session');
const path = require('path');
const dotenv =  require('dotenv');
dotenv.config({path:'./config.env'});
const port = process.env.port;
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'./views'));
app.use(express.static(path.join(__dirname,'./public')));
app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({
    extended:true,
}));
app.use(bodyparser.json());
app.use(session({
    secret:"doha-key",
    resave:false,
    saveUninitialized:true,
    cookie:{secret:true}
}));

// admin login
const adminroute = require('./route/AdminRoute');
app.use('/',adminroute);

// dashboard
const userroute = require('./route/UserRoute');
app.use('/',userroute);

//frontend
const frontendroute = require('./route/FrontendRoute');
app.use('/',frontendroute);

app.listen(port,function(){
    console.log(`\nchay sever tai http://localhost:${port}\n`);
})