const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(id, done) {
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
    console.log(`deserializing user.... ${id}`, id);
    done(null, { username: 'lbthomte' });
});
// module.exports = (passport) => {
passport.use('passportLocal', new LocalStrategy(
    function(username, password, done) {
        // User.findOne({ username: username }, function (err, user) {
        //   if (err) { return done(err); }
        //   if (!user) { return done(null, false); }
        //   if (!user.verifyPassword(password)) { return done(null, false); }
        //   return done(null, user);
        // });
        // console.log('username', 'password', username, password)
        return done(null, { username: 'lbthomte' });
    }
));

passport.use('passportBearer', new BearerStrategy((token, done) => {
    if (token === 'abc') {
        return done(null, { username: 'lbthomte' });
    }
    return done(null, false);
}));
// };

module.exports = passport;
