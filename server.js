var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    path = require('path'),
    config = require('./config'),
    mongoose = require('mongoose'),
    multer = require('multer');

// For connecting to the db
mongoose.connect(config.database);


app.set('view engine', 'jade');
app.set('views', path.join(__dirname + '/app/views'));

// Logging
app.use(morgan('dev'));

// File Upload
app.use(multer());

app.use(express.static(__dirname + '/public'));

var appRouter = require('./app/routes/app')(app, express);
app.use('/', appRouter);

app.listen(config.port);
console.log('Using local port ' + config.port);
