const express = require('express');
const routes = require('./routes');
// import sequelize connection
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('coolback_db', 'root', 'remaininthelight', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();






const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
