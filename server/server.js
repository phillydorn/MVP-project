var express     = require('express');

var app = express();

var router =express.Router();

app.use(express.static(__dirname + '../../client'));

app.use('/data', router);


app.listen(3000);
module.exports = app;