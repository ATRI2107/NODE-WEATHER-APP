const request=require('request-promise');
const url='http://api.weatherstack.com/current?access_key=f7075349ca9fe975d972786a45722ac8&query=26.8467,80.9462';

const options={
    url: url,
    json: true
};
request(options)
    .then(response=>{
        console.log(response.current);
    })
    .catch(err=>{
        console.log(err);
    });