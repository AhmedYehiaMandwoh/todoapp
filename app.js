const express = require('express');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database')
const users = require('./routes/users');
const Todo = require('./routes/todos')
const path = require('path');
const history = require('connect-history-api-fallback');

mongoose.connect(config.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('connected to database ' + config.database)
});

mongoose.connection.on('Error', (err) => {
    console.log(err)
});

// App 
const app = express();


// Cors
app.use(cors());

// BodyParser
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// Static Folder
const staticFileMiddleware = express.static(path.join(__dirname + '/public'));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
  }));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
    res.send('hello from home')
  });

// Router Page
app.use('/users', users);
app.use('/todos', Todo);

// Port

const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;     console.log("App now running on port", port);
  });


