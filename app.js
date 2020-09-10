const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const request=require('request-promise');
const url='http://api.weatherstack.com/current?access_key=f7075349ca9fe975d972786a45722ac8&query=26.8467,80.9462';

const app=express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));

module.exports=app;