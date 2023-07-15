const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '968640556018-5cl40tmbcv1908n1s7maa67c18c5ueea.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/example/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return document(err, user);
  }
));
