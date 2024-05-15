const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/router');

app.use(cors);
app.use(router);

app.listen(3000, () => {
    console.log('running on port 3000!');
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

