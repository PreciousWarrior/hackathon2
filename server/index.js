import express from "express"
import fs from "fs/promises"
import rateLimit from 'express-rate-limit'
import cors from "cors"
import bodyParser from "body-parser"



function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// To lazy (and dont have enough time) to use a proper DB
const app = express()
app.use(cors())
app.use(bodyParser.json())

const used_ids = (await fs.readdir('./data')).map(file=>file.split(".")[0])

app.post('/create', async (req, res) => {
    res.status(400)

    let id;
    do {
        id = makeid(6);
    }
    while (used_ids.indexOf(id) != -1)
    used_ids.push(id)
    await fs.writeFile(`./data/${id}.json`, JSON.stringify(req.body))


    res.status(200)
    return res.send(id)
})

app.get(/\/fetch(.+)/, async (req, res) => {

    const id = req.path.replace("fetch/", "")
    let contents
    try{
        contents = await fs.readFile(`./data/${id}.json`)
    }
    catch (err){
        res.status(404)
        return res.send("Not found")
    }
    res.status(200)
    res.setHeader('content-type', 'application/json')
    return res.send(contents)
})


const getLimiter = rateLimit({
    windowMs: 30*60*1000,
    max: 100,
    standardHeaders: true,
})

const createLimiter = rateLimit({
    windowMs: 24*60*60*1000,
    max: 5,
    standardHeaders: true
})


if (process.env.PROD){
    console.log("Using rate limits...")
    app.use('/fetch', getLimiter)
    app.use('/create', createLimiter)
}


app.use(express.static('./static'))
app.listen(8080, ()=>console.log("We are good to go!"))


