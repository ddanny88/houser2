require('dotenv').config();
const express = require('express')
const { json } = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();

app.use(json());

// connecting to the databse: 
massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected.');
})



app.get('/api/houses', controller.getHouses);
app.post('/api/house', controller.addHouse);
app.delete('/api/house/:id', controller.removeHouse);


app.listen(3001, () => console.log("Listening on Port 3001..."))