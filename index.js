const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { Dburl } = require('./secrets')

const router = require('./routes/allroutes')
const cookie = require('cookie-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookie());
app.set('view engine',"ejs")
app.use(cors({ origin: "*" })) 

app.use(router);
mongoose.connect(Dburl)
    .then(() => {
    app.listen(PORT,(req,res)=>{
        console.log(`http://localhost:${PORT}`);
    });
})
.catch(err=>{
    console.log("error generated")
    console.log(err)
})

