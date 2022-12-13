

  const express = require('express');

  const app = express()

  // setup port for server app

   app.listen(3000,()=>{
      console.log('server is running at port 3000');
   })

//    // http method 
//     app.get('/',(req,res)=>{
//         res.send("GET method")
//     })

app.post('/login',(req,res)=>{
    res.send()
});
