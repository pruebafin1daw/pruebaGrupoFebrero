const express = require('express'); // Express
const mongoose = require('mongoose'); // Mongoose DB Users
const bodyparser = require('body-parser'); // Body-Parser
const cors = require('cors'); // CORS
const https = require('https'); // HTTPS
require('dotenv').config(); // DotENV

// ---------- MONGOOSE

mongoose.set('strictQuery', false);

// Connect
let DB_User = process.env.DB_USER;
let DB_Password = process.env.DB_PASSWORD;
let DB_HOST = process.env.DB_HOST;
let DB_Port = process.env.DB_PORT;
let DB_Name = process.env.DB_NAME;
mongoose.connect('mongodb://' + DB_User + ':' + DB_Password + 
'@' + DB_HOST + ':' + DB_Port + '/' + DB_Name + '?authSource=admin', () => {
    console.log('Connect to DB!');
});

// Models
const Car = require('./models/Car');

// ---------- EXPRESS

// Set express app
const app = express();
app.use(bodyparser.json());
app.use(cors());

// Listening
https.createServer({ 
    key: fs.readFileSync('./keys/key.pem'), 
    cert: fs.readFileSync('./keys/cert.pem') 
}, app)
.listen(process.env.SERVER_PORT, () => {
    console.log('Server running: 443');
})