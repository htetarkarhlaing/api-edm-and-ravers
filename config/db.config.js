const mongoJs = require('mongojs');

const uri = "mongodb+srv://devarkarmm:hakh872001@node-mongo.cgvs0.mongodb.net/demandravers?retryWrites=true&w=majority";

const db = mongoJs(uri, ["artists"]);

module.exports = db;