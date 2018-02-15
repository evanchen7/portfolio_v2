const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post('/test', (req, res) => {
  let x = parseInt(req.body.x), y = parseInt(req.body.y);
  if (isNaN(x) || isNaN(y)) res.send('Send a valid number for x or y value and try again');
  let sum = {
    "sum": x + y
  };
  res.send(sum);
});

app.listen(port);

console.log(`Express server listening on localhost:${port}`);
