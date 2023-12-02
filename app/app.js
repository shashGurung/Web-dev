const express = require('express')
const app = express();
const port = 3000;

app.arguments(express.static('public'));

app.get('/', (req,res) => {
    res.send('Hello, this is my second Node app!')
});

app.listen(port, () => {
    console.log('My second app listening on port ' + port + '!')
});