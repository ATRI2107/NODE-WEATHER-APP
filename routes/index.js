const express=require('express');
const router=express.Router();

router.get("/",(req,res,next)=>{
    res.render('index');
});
router.get("/about",(req,res)=>{
    res.render("about");
});
router.get("/help",(req,res)=>{
    res.render("help");
})
module.exports=router;