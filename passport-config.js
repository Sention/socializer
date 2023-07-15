const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '968640556018-5cl40tmbcv1908n1s7maa67c18c5ueea.apps.googleusercontent.com';
const clientSecret = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
  }
));