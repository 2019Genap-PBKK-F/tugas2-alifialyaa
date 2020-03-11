const express = require("express");
const app = express();
const sql = require('mssql')

const http = require('http');

const hostname = '10.199.14.46';
const port = 8004;

const config = {
  user: 'su',
  password: 'SaSa1212',
  server: '10.199.13.253',
  database: 'nrp05111740000011'
};


var executeQuery = function(res, query) {
  sql.connect(config, function(err){
      if(err) {
          res.end('Connection Error\n' + err)
      }
      else {
          var request = new sql.Request()
          request.query(query, function(err, response){
              if(err) {
                  console.log('Query Error\n' + err)
              }
              else{
                  res.send(response.recordset)
              }
          })
      }
  })
}

// app.get("/",function(req, res)
// {
//   // res.end('Hello World');
// });

app.get("/", function(req, res)
{
  var query = "Select * from mahasiswa";
  executeQuery(res,query);
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});