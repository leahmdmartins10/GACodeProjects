
module.exports = {
    getCats,
    show
}

const Cat = require('../models/cat.js');

function getCats(req, res) {
    const cats = Cat.getAll();
    res.json(cats);
}

function show(req, res) {
    const cat = Cat.getOne(req.params.id) || {message: "No cat found"};
    res.json(cat);
}