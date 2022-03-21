const connect = require('./configs/db')

const app = require("./index")

app.listen(5000, async (req, res) =>{
    try{
        await connect
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
    console.log("Listening to port 5000")
})