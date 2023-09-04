const pool = require('../database/database')
const postsController = {
    getAll: async(req,res)=>{
        try{
            const [rows, fields] = await pool.query("SELECT * FROM personnes")
            res.json({
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async(req, res)=>{
        try{
            const id = req.params.id
            const [rows, fields] = await pool.query(`SELECT * FROM personnes WHERE id=${id}`)
            res.json({
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = postsController