const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const os = require('os');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));

const port = process.env.PORT || 8080;
const message = process.env.MESSAGE || 'Getting started with Docker!';

app.get('/', function (req, res) {
    res.render('home', {
      message: message,
      hostName: os.hostname()
    });
});

app.listen(port, function () {
  console.log('Listening on: http://%s:%s', os.hostname(), port);
});