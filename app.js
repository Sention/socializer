const express = require('express');
const session = require('express-session');
const passport = require('passport');
const ejs = require('ejs');
const path = require('path');

require('./routes/auth');

function isLoggedIn(req, res, next) {
    if(req.user){
        return next();
    } else {
        return res.sendStatus(401);
    }
}

const app = express();

app.use(session({
    secret: 'dog',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));

app.get('/auth/google/callback',
passport.authenticate('google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/google/failure'
}));

app.get('/auth/protected', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '/views/youtube.html'));
});

app.get('/auth/google/failure', (req,res) => {
    res.send('Something went wrong...');
});

//Listening to the server
app.listen(3000, () => console.log('listening on 3000'));
