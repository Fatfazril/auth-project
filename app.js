const express = require('express');

const app = express();

app.get('/' , (req, res)=>{
    res.send("Hello , well comback to coding again!!")
})

app.listen(5000 , ()=>{
    console.log('server running on http://localhost:5000')
})