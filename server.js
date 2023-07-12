const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views', 'index.html'));
});

//Listening to the server
app.listen(3000, () => console.log('listening on 3000'));
