const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

import knex from './db/knex';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressSession from 'express-session';

passport.use(
  new Strategy((username, password, cb) => {
    console.log('In strategy');
    console.log('Username');
    console.log(username);
    console.log('Password');
    console.log(password);
    knex('users')
      .where({ username })
      .first()
      .then(user => {
        if (!user) {
          return cb(null, false, { message: 'Invalid email or password' });
          // throw new Error('No user with such credentials');
        }
        if (user.password !== password) {
          return cb(null, false, { message: 'Invalid email or password' });
          // throw new Error('No user with such credentials');
        }
        return cb(null, user);
      }) // ???
      .catch(error => cb(error));
  })
);

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser((id, cb) => {
  knex('users')
    .where({ id })
    .then(user => cb(null, user))
    .catch(error => cb(error));
});

const app = express();
const PORT = process.env.PORT || 5000;

//const orders = './routes/orders';
import orders from './routes/orders';
import files from './routes/files';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: 'keyboardCat',
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/orders', orders);
app.use('/api/files', files);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
