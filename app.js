const express = require('express')
const app = express()

//import n router rehetra
const postsrouter = require('./routes/posts.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//alias chemin route rehetra
app.use('/api/v1/posts', postsrouter)//c-a-d '/api/v1/posts'=postsRouter

const port=3000

app.get('/', (req,res) => res.send("Hello Express"))

app.listen(port, ()=>console.log(`notre programme start sur http://localhost:${port}`))