const mongoos = require('mongoose');

mongoos.connect(process.env.DATABASE_URL);

const db = mongoos.connection;

db.on('connected', function () {
    console.log(`Mongoose is connected ${db.name} on ${db.host}:${db.port}`);
})