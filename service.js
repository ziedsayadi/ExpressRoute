const express = require('express') ;
let hours = new Date().getHours
const app=express();

//Site open Condition

app.get('/', (req, res)=> {
    if ( (hours >8) && (hours <17) ) res.sendFile(__dirname + '/public/Home.html');
    else res.sendFile(__dirname + '/public/UnlockOffice.html');
  })


// Static folder
app.use(express.static(__dirname + '/public'));

// Port

const PORT=process.env.PORT || 5000 ;

app.listen(PORT,()=> console.log( `server started on port ${PORT}` ));