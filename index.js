const cors = require('cors');
const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const { Dburl } = require('./secrets')
const router = require('./routes/allroutes')
const cookie = require('cookie-parser')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookie());
app.set('view engine', "ejs");
app.use(cors({ origin: "*" }));
 
app.use(router);

mongoose.set('strictQuery', false);

try {
    mongoose.connect(Dburl).then(()=>{
        console.log("Connected");
        app.listen(PORT,(req,res)=>{
            console.log(`http://localhost:${PORT}`);
        });
    }).catch((err)=>{
        console.log("\nnot connectec\n",err);
    })
    
}
catch (err) {
    console.log("error generated")
    console.log(err)
}



