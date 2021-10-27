const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const morgan = require('morgan');

const app = express();
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 4000

//app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use('/catalogue', require('./src/catalogue'))
//app.use('/order', require('./src/order'))

//app.get('/', (req, res) => {
app.get('*', (req, res) => {
    res.end('The backend for the Cupboard Ltd. Webapplication was started.')
});

//const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});