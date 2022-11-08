const express = require('express');
const app = express();
const router = require('./Routes/router');
const bodyParser  = require('body-parser');
app.use(bodyParser.json())
app.use('/api', router);
app.listen(3000, ()=>console.log('listen 3000'));