const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('You entered root route');
})

app.listen(1111);