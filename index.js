const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/middleurl', express.static('public'));

const port = 3000;
app.listen(port);
console.log("Listening on port "+port );