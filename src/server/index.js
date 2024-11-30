var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname);

// Variables for url and api key

const api_key = process.env.API_KEY
const api_url = "https://26f1c68889f246f5bea3f19b9f7cc708.api.mockbin.io/"

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});


// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Article Evaluation app listening on port 8000!');
});


