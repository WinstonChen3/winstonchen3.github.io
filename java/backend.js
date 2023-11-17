const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return console.error(err);

    const newUser = {
      username,
      password: hash
    };

    db.collection('users').insertOne(newUser, (err) => {
      if (err) return console.error(err);

      res.send('Registration successful');
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.collection('users').findOne({ username }, (err, user) => {
    if (err) return console.error(err);

    if (!user) {
      return res.status(404).send('User not found');
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return console.error(err);

      if (result) {
        req.session.loggedIn = true;
        req.session.username = username;
        res.send('Login successful');
      } else {
        res.status(401).send('Incorrect password');
      }
    });
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out successfully');
});

app.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.send(`Welcome, ${req.session.username}!`);
  } else {
    res.status(401).send('Unauthorized');
  }
});

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err);

  const db = client.db(dbName);
  console.log('Connected to MongoDB');

  db.createCollection('users', (err, res) => {
    if (err) return console.error(err);
    console.log('User collection created');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});