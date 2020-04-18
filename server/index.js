const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router')
const app = express()
const port = 3000
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
// app.use('/');
// create a basic .get path '/name' that sends a response with your name
app.get('/name', (req, res) => res.send('Anna'));
// when it gets to the endpoint, it'll go to the router at router.js which will do a get request on controller.js which will send information back to index.js
app.use('/api', router);
// use exxpress.static to serve our index.html in client/dist which will refer to our index.html
app.use('/', express.static(path.join(__dirname, '../client/dist'))); //maker sure it is not on /static
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


// Starting here on this file
// Then router
// then controller
