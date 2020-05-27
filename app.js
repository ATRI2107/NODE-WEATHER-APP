const request=require('request-promise');
const url='http://api.weatherstack.com/current?access_key=f7075349ca9fe975d972786a45722ac8&query=26.8467,80.9462';

const options={
    url: url,
    json: true   //Automatically understands that the data which is coming is json
};
request(options)
    .then(response=>{
        console.log(response.current);
    })
    .catch(err=>{
        console.log(err);
    });

const geocodintg='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXRyaTIxMDciLCJhIjoiY2thcGYxbXdmMDljODJxbXNmZ21wM3k3YyJ9.n-Lsy9wDdf46KtH_raUwRA&limit=1';
request({url: geocodintg,json: true})
    .then(response=>{
        const latitude=response.features[0].center[1];
        const longitude=response.features[0].center[0];
        console.log(latitude+" "+longitude);
    })
    .catch(err=>{
        console.log(err);
    })