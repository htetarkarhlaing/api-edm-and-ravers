const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
const mongoJs = require('mongojs');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        data: {
            message: "Success Bro...!"
        }
    })
});

const PORT = 8000;

app.listen( PORT, ()=> {
    console.log(`localhost:${PORT}`);
})