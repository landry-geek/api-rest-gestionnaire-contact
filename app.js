const express = require('express')
const app = express()

const postsRouter = require('./routes/posts.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/personnes', postsRouter)

const port = 5000

app.get('/', (req, res)=>{res.send('Hello express')})

app.listen(port, ()=>console.log(`notre programme demarre sur http://localhost:${port}`))