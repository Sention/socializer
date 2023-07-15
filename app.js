const express = require('express');
const passport = require('passport');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views', 'index.html'));
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));




//Listening to the server
app.listen(3000, () => console.log('listening on 3000'));
