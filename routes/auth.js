const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('passportLocal', (err, user) => {
        if (err) {
            return next(err);
        }
        return req.logIn(user, (err) => {
            res.send(user);
        });
    })(req, res, next);
});

router.post('/logout', (req, res, next) => {
    req.logOut();
    return res.send('Successfully logged out.');
});

module.exports = router;
