const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.get('/', function(req, res){
  var root = {};
  root.status = 'success';
  root.method = 'index';
  var json = JSON.stringify(root);
  res.send(json);
});

// Route to get all courses
app.get("/api/getmeals", (req,res)=>{
    console.log("BACKEND")
  db.query("SELECT * FROM recipes", (err,result)=>{
    if(err) {
      console.log(err);
    } 
    console.log(print(result))
    res.send(result);
  });   
});

app.listen(PORT, ()=>{
    console.log("Server is running on: ", {PORT})
})