const express=require('express');
const router=express.Router();
const request=require('request-promise');
var url='http://api.weatherstack.com/current?access_key=f7075349ca9fe975d972786a45722ac8&query=';

router.get("/",(req,res,next)=>{
    res.render('index');
});
router.get("/about",(req,res)=>{
    res.render("about");
});
router.get("/help",(req,res)=>{
    res.render("help");
});
router.post("/",(req,res)=>{
    var city=req.body.city.replace(" ","%20");
    url=url+city;
    var options={
        uri: url,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    request(options)
    .then(response=>{
        const result={
            name: city.replace("%20"," "),
            time: response.current.observation_time,
            temp: response.current.temperature,
            humidity: response.current.humidity
        };
        res.render('weather',result);
    })
    .catch(err=>{
        console.log(err);
    })
});
module.exports=router;