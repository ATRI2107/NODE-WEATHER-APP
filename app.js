const request=require('request-promise');
const url='http://api.weatherstack.com/current?access_key=f7075349ca9fe975d972786a45722ac8&query=26.8467,80.9462';

request({url: url})
    .then(response=>{
        console.log(response);
    })
    .catch(err=>{
        console.log(err);
    });