const express = require('express');

const app = express();
const PORT = process.env.PORT || 1111;

app.get('/', (req, res) => {
    res.send('Hello from Daniel!');
})

app.listen(PORT);