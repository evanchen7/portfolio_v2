const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log(`Express server listening on ${port}`);
