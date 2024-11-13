
// Require Dependencies
const express = require('express');
const cors = require('cors');
const logger = require('morgan');


// Create the app
console.log('This is our server');
const PORT = process.env.PORT || 3000; // all caps variables are look up values
const app = express();

// Middleware pipleline
app.use(logger('dev'));
app.use(cors());
// the following middleware comes out of the box with express...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, function() {
    console.log(`Express server listeneing on port ${PORT}`);
})

app.get('/', function(req, res) {
    res.send("Welcome to the server");
})

app.get('/favourite-food', function(req, res) {
    res.send("My favourite food is udon noodle soup");
})

app.get('/favourite-movie', function(req, res) {
    res.send("My faovurite movie is 10 Things I Hate About You");
})

app.get('/contact', function(req, res) {
    res.send("My contact information is: \nName: Leah (Lee) Martins\nEmail: leahmdmartins@icloud.com");
})
app.get('/about-me', function(req, res) {
    res.json({
        name: 'Lee Martins',
        age: 20,
        occupation: 'Computer Engineering Student',
        hobbies: ['bouldering', 'coding', 'gaming']
    });
})

app.get('/movies', function(req, res) {
    res.json({
        movies: [
            {
                title: '10 Things I Hate About You',
                genre: 'Rom Comedy',
                year: 1999
            },
            {
                title: 'The Notebook',
                genre: 'Rom Comedy',
                year: 2004
            },
            {
                title: 'The Proposal',
                genre: 'Rom Comedy',
                year: 2009
            }
        ]
    });
});

app.get('/article/:slug', function(req, res) {
    res.send("This tells you the slug of the article you're looking for"); 
    console.log(req.params);
});

app.get('/message/:id', (req, res) => {
    console.log(`Getting a message with the id of: ${req.params.id}`);
    res.send({msg: `Message with an id of: ${req.params.id} FOUND`});
})

app.get('/find', (req, res) => {
    console.log(`Finding someone with a name of ${req.query.name} and an age of ${req.query.age}`);
    res.send({msg: `${req.query.name} is ${req.query.age} years old`});
})

app.get('/dogs' , (req, res) => {
    res.send("WOOF WOOF WOOF");
})

app.get('/cats/:catName' , (req, res) => {
    res.json({
        catName: req.params.catName
    })
})

app.post('/towns', (req, res) => {
    res.send("POST Request Called");
    res.json({
        hometown: "Toronto"
    });
});

app.get('/towns', (req, res) => {
    res.json("TOWNS GET Request Called");
});

app.put('/profile/update/:username', (req, res) => {
    res.send("PUT Request Called");
});

app.delete('/tacos', (req, res) => {
    res.send(`DELETE Request Called with type: ${req.query.type} and tacoID: ${req.query.tacoID}`);
    res.json({
        msg: `I deleted the ${req.query.type} taco with the id of ${req.query.tacoID}`
    })
})
