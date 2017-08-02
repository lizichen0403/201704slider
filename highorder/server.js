let express = require('express');
let app = express();
app.get('/clock',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  setTimeout(()=>{
    res.send({time:new Date().toLocaleString()});
  },3000);
});
app.listen(3000);