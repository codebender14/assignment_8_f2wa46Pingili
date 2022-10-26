var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next)
{
    var num1 = Math.floor(Math.random()*10);
    var num2 = Math.floor(Math.random()*10);
    var num3 = Math.floor(Math.random()*10);
    var num4 = Math.floor(Math.random()*10);
    var atanFunction = Math.atan(num1,num2);
    var expFunction = Math.exp(num3);
    var expm1Function = Math.expm1(num4);

    res.render('computation',
    {
        title: 'Sai Maneendra Pingili Computing the functions',
        num1: num1,
        num2: num2,
        num3: num3,
        num4: num4,
        atan: atanFunction,
        exp: expFunction,
        expm1: expm1Function
    });

    
});

module.exports = router;