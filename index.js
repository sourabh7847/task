const path = require("path");
const express = require("express");

const sqlConnection = require('./mysql');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT =  process.env.port || 8000;

// add middlewares
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.static("public"));

app.use('/sql', sqlConnection);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

// start express server on port 5000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
