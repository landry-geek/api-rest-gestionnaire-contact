const express = require('express')
const app = express()

const postsRouter = require('./routes/posts.router')

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/personnes', postsRouter)

const port = 5000

app.get('/', (req, res)=>{res.send('Hello express')})

app.listen(port, ()=>console.log(`notre programme demarre sur http://localhost:${port}`))