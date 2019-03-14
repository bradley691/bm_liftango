const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

const { Role, User, Ride, Stop, Address,  } = require('./sequelize');

// new Role
app.post('/api/role', (request, response) => {
    Role.create(request.body)
        .then(role => response.json(user));
});

// get Roles
app.get('/api/roles', (request, response) => {
    Role.findAll().then(users => response.json(users));
});

// new User
app.post('/api/user', (request, response) => {
    User.create(request.body)
        .then(user => response.json(user))
});

// new Ride
/**
 * input {user_id, day}
 * validation user_id must have role of driver
 */
app.post('/api/ride', (request, response) => {

});

//new stop
app.post('/api/stop', (request, response) => {

})

/**
 * input {ride_id, stop_id, user_id, street, suburb, state, est_time}
 * validation user_id must have role of passanger
 */
app.post('/api/address', (request, response) => {

})


/**
 * input {ride_id}
 * 
 * output {Ride Object + list of Addresses with stop type & passanger}
 */
app.get('/api/addresses/:ride_id', (request, response) => {

});