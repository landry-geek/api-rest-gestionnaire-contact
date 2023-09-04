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
                status: "error !"
            })
        }
    }
}

module.exports = postsController