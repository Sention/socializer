const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

require('./routes/auth.js');

const SESSION_SECRET = 'cats';

function isLoggedIn(req, res, next) {
    if(req.user){
        return next();
    } else {
        return res.sendStatus(401);
    }
}

const app = express();
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true}
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views', 'index.html'));
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/protected',isLoggedIn, (req, res) => {
    res.send('Logged in!');
});

app.get('/google/callback',
passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
}));

app.get('/auth/failure', (req,res) => {
    res.send('Something went wrong...');
});

//Listening to the server
app.listen(3000, () => console.log('listening on 3000'));
