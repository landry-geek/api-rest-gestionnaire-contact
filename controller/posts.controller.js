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
    },
    create: async(req, res)=>{
        try{
            const {nom, email} = req.body
            const sql = "INSERT INTO personnes (nom,email) VALUES (?,?)"
            const [rows, fields] = await pool.query(sql,[nom,email])
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
    update: async(req, res)=>{
        try{
            const id = req.params.id
            const {nom, email} = req.body
            const sql = `UPDATE personnes SET nom=?, email=? WHERE id=${id}`
            const [rows, fields] = await pool.query(sql,[nom,email])
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