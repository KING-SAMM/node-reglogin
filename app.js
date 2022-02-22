const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello KC Samm');
})

app.listen(port, () => {
    console.log('Server running on port', port);
})