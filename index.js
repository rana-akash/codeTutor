var express = require('express');
var router = express.Router();;

const asyncHandler = fn =>(req,res,next)=>
    Promise
        .resolve(fn(req,res,next))
        .catch(next)

router.get('/getMsg',asyncHandler((req,res,next)=>{
    res.send('{hello}'); 
}));

module.exports = router;