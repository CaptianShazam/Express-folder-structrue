const express = require('express');

const app = express();

const logger = require('./logger/logger');

const apidata = require('./data/data');

const PORT = process.env.PORT || 4205 // will check the environment for port if not will go with 4205 

//middleware 
app.use('/',logger);

app.get('/',(req,res)=>
{
    res.send("It worked"); // sends the response 
});

// GET all data
app.get('/api/need',(req,res)=>
{
    res.json(apidata);
});

//GET with parameter
app.get('/api/need/:id',(req,res)=>
{

   // res.send(req.params.id);

    

    const value = apidata.some(data => data.ItemID ===  parseInt(req.params.id));

if(value)
{
    res.json(apidata.filter(data => data.ItemID ===  parseInt(req.params.id)));
}
else
{
    res.status(400).json({message:`No data found for this LID ${req.params.id}`})
}

   // console.log(value);

});



app.listen(PORT,()=>
{
    console.log(`server started ${PORT} `);
}); // to mention port and server starts with this. 


 