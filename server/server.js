const path = require('path');
const express = require('express');
const app = express();

const quotes = [
    {body: 'There is nothing permanent except change', source: 'Heraclitus'},
    {body: 'Learning never exhausts the mind', source: 'Leonardo da Vinci'},
    {body: 'It is better to travel well than to arrive', source: 'Gautama Buddha'}
];

// log middleware
app.use(function (req, res, next) {
    console.log(`request url: ${req.url}`);
    next();
});
// static files
app.use(express.static(path.join(__dirname, '../build')));


// get quote
app.get('/quote', (req, res) => {
    const index = Math.floor(Math.random() * quotes.length);
    res.json(quotes[index]);
});

// index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


const PORT = process.env.PORT || 4000;	//process.env.PORT is used by heroku
app.listen(PORT,
    () => console.log(`server listening on port ${PORT}`)
);
