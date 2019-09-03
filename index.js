// const express = require('express');
const  server  = require('./server.js');


// server.get('/', (req, res) => {
//     res.status(200).json({ api: '...up'})
// })

const port = 8000;
server.listen(port, () => console.log('api running'))