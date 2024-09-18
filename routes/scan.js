const express = require('express');
const router = express.Router();

function checkAuthSecurity(req, res, next) {

    if (req.session.securityLogin) {
    next();
    } else if(req.session.loggedIn) {
        res.redirect(`/home?uid=${req.session.loginCode}`)
    } else {
    res.redirect('/');
    }
}

// Home page route
router.get('/scan', checkAuthSecurity, (req, res) => {
    res.render('pages/scan', {
        title: 'Scan',
        style: 'styleScan.css',
        script: 'scriptScan.js'
    });
});

module.exports = router;