const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');

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