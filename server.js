const express = require('express');
const app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({

    host:'localhost',
    user:'root',
    port:'3306',
    password:'12341234',
    database:'foodsdb',
});

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Start');
});

con.connect(function(error) {
    if(error) console.log(error);
    else console.log('listenting on port 8080');
});

app.get('/foods_info', function(req, res){
    con.query('select * from food_list', function(error, rows, fields){
        if(error) console.log(error);

        else {
            console.log(rows);
            res.send(rows);
        }
    });
});