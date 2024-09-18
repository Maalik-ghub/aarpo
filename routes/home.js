const express = require('express');
const router = express.Router();

function checkAuth(req, res, next) {
    if (req.session.loggedIn) {
    next();
    } else {
    res.redirect('/');
    }
}

// Home page route
router.get('/home', checkAuth, (req, res) => {
    const { uid } = req.query;
    res.render('pages/home', {
        title: 'Home',
        style: 'styleHome.css',
        script: 'scriptHome.js',
        userID: `${uid}`
    });
});

module.exports = router;