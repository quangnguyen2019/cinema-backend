const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models/db');

const apiUserRoute = require('./api/routes/user.route');
const apiMovieRoute = require('./api/routes/movie.route');
const apiCinemaRoute = require('./api/routes/cinema.route');
const apiCinemaGroupRoute = require('./api/routes/cinema_group.route');
const apiShowtimeRoute = require('./api/routes/showtime.route');
const apiBookingRoute = require('./api/routes/booking.route');
const apiTicketRoute = require('./api/routes/ticket.route');

const app = express();
const port = 1235 || process.env.PORT;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// API
app.use('/users', apiUserRoute);
app.use('/movies', apiMovieRoute);
app.use('/cinemas', apiCinemaRoute);
app.use('/cinema-groups', apiCinemaGroupRoute);
app.use('/showtimes', apiShowtimeRoute);
app.use('/bookings', apiBookingRoute);
app.use('/tickets', apiTicketRoute);


// Listen Port  {force: true }
db.sync().then(() => {
    app.listen(port);
    console.log('Server is listening on port ' + port);
});