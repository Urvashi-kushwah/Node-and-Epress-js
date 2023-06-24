const express = require('express');

const exp = express();

exp.get('/', function(req,res){
    res.send('Hello World')
})

exp.get('/family',function(req,res){
    res.send('Welcome Back Family')
})


exp.listen(9000, function(req,res){
    console.log('Running...')
})