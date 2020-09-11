const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const request=require('request-promise');
const url='http://api.weatherstack.com/current?access_key=f7075349ca9fe975d972786a45722ac8&query=26.8467,80.9462';

const app=express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'public')));

const indexRoute=require('./routes/index');
app.use("/",indexRoute);
module.exports=app;