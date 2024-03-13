const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const store = new session.MemoryStore();
const app = express();
const passport = require('passport');
const router = express.Router();

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: equipments } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, equipments, totalPages, currentPage };
};

require('dotenv').config();

app.set('view-engine');
app.use(flash());
// Middleware to parse JSON and handle URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));

app.use(session({
  secret : process.env.SESSION_SECRET,
  resave : false,
  cookie : { maxAge : 1800000 },
  saveUninitialized : false,
  store : store
}));

const local = require('../strategies/local.js');
app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('../api/auth.js');
const equipmentRoute = require('../api/equipment.js');

// Mount the router under the '/api/auth' prefix
app.use('/api/auth', authRoute);
app.use('/api/equipment', equipmentRoute);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, resp) => {
  resp.render('index.ejs');
})

app.get('/equipment', (req, resp) =>{
  resp.render('equipment.ejs');
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});