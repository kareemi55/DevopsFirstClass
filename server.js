const express = require('express');
const app = express();

const port = 8000;

app.get('/data', (req, res) => {
    res.send('hello this is learning class')
})

app.listen(port, (err, data) => {
    if(err) {
        console.log(err)
    }else {
        console.log(`http://localhost:${port}`)
    }
})
