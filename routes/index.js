const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Login',
        style: 'styleIndex.css',
        script: 'scriptIndex.js'
    });
});

module.exports = router;