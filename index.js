require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const session = require('express-session');
app.use(bodyParser.json());
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

// Session setup
const redisClient = redis.createClient(); // Connects to localhost:6379 by default

// Middleware to use sessions
app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret-key', // Replace with your own secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

let codes = require('./codes.json').codes;

  // Endpoint to login with a code
app.post('/login', (req, res) => {
    const { code } = req.body;
  
    // Find the code in the list
    const codeEntry = codes.find(c => c.code === code);
  
    if (codeEntry) {
      // Set session loggedIn to true
      if(code == "cockingnabeel1") {
        req.session.securityLogin = true;
        req.session.loggedIn = true;
        req.session.loginCode = code;
        res.status(200).send(code);
      } else {
        req.session.loggedIn = true;
        req.session.loginCode = code;
        res.status(200).send(code);
      }
    } else {
      res.status(400).send('Invalid');
    }
  });

  app.post('/check', (req, res) => {
    const { code } = req.body;
  
    // Find the code in the list
    const codeEntry = codes.find(c => c.code === code);
  
    if (codeEntry && !codeEntry.used) {
      // Set session loggedIn to true
      codeEntry.used = true;
      fs.writeFileSync('./codes.json', JSON.stringify({ codes }, null, 2));
      res.status(200).send('Valid');
    } else {
      res.status(400).send('Invalid');
    }
});

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes and middleware here
const indexRouter = require('./routes/index')
app.use('/', indexRouter)
const homeRouter = require('./routes/home')
app.use('/', homeRouter)
const scanRouter = require('./routes/scan')
app.use('/', scanRouter)


// ...
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
