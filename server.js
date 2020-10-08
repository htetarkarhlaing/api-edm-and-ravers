const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
const mongoJs = require('mongojs');

const uri = "mongodb+srv://devarkarmm:hakh872001@node-mongo.cgvs0.mongodb.net/demandravers?retryWrites=true&w=majority";



const db = mongoJs(uri, ["artists"]);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    db.artists.find((err, data)=>{
        if(err){
            res.status(500).json({
                meta: "Internal Server Error."
            })
        }
        else {
            res.status(200).json({
                meta: "Ok",
                data: data
            })
        }
    })
});

const PORT = 8000;

app.listen( PORT, ()=> {
    console.log(`localhost:${PORT}`);
})