require('dotenv').config();
const express = require('express');
const houseCtrl = require('./controller');
const massive = require('massive')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('connected to database')
    })
    .catch(err=>)


app.listen(4000, ()=> {
    console.log(`Server ${4000} working, nothing is going to stop me now`)
})