const { User } = require('../../db/db')

async function postUser(req,res) {
    try {
       const {email, password} = req.body
       if (email && password) {
        await User.create(email,password)
       }else{
        res.status(400).json({message:"Faltan datos"})
       }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = postUser