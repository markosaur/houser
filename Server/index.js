require('dotenv').config();
const express = require('express');
const houseCtrl = require('../Server/controller');
const massive = require('massive')


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('Connected, Tonight Im gonna have myself a real good time')
    })
    .catch(err=> console.log('Another one bites the dust, time to cry!!!'))

//this is where the endpoints will go
app.get('/api/houses',houseCtrl.getHouse)
app.post('/api/houses', houseCtrl.createHouse)
app.delete('/api/houses/:id', houseCtrl.deleteHouse)




app.listen(SERVER_PORT, ()=> {
    console.log(`Server ${SERVER_PORT} working, nothing is going to stop me now`)
})