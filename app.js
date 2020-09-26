const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const hbs=require('hbs');
const partialsPath=path.join(__dirname,'/views/partials');

const app=express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(partialsPath);
const indexRoute=require('./routes/index');
const { dirname } = require('path');
app.use("/",indexRoute);
module.exports=app;