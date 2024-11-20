
module.exports = {
    getCats,
    show,
    create
}

const Cat = require('../models/cat.js');

async function getCats(req, res) {
    const cats = await Cat.find();
    res.json(cats);
}

async function show(req, res) {
    const cat = await Cat.findOne(req.params.name);
    res.json(cat);
}

async function create(req, res) {
    const cat = await Cat.create(req.body);
    res.json(cat);
}