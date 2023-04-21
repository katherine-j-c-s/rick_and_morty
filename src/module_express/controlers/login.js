const { User } = require('../../db/db')

const STATUS_OK = 200
const STATUS_ERR = 404

async function login(req,res) {
    const { password, email } = req.query;
    try {
        if (!password || !email ) {
            res.status(STATUS_ERR).json({ message: "Faltan datos" })
        }
        else{
            const user = await User.findByPK({ where: {email}})
            if (user) {
                const constraseña = await User.findByPK({where: {email,password}})
                if(!constraseña){
                    res.status(STATUS_ERR).json({ message: "Contraseña incorrecta"});
                }else{
                    res.status(STATUS_OK).json({ access: true });
                }
            }else{
                res.status(STATUS_ERR).json({ message: "Usuario no encontrado"});
            }
        }
    } catch (error) {
        res.status(STATUS_ERR).json({ message: error });
    }
}

module.exports= {
    login
}