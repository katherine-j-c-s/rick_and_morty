require('dotenv').config()

const USER = process.env.DB_USER
const EMAIL = process.env.DB_EMAIL
const PASSWORD = process.env.DB_PASSWORD

const STATUS_OK = process.env.DB_STATUS_OK
const STATUS_ERR = process.env.DB_STATUS_ERR

function login(req,res) {
    const { password, email } = req.query;
    try {
        if (!password || !email ) {
            res.status(STATUS_ERR).json({ message: "There isn't a password or email" })
        }
        if (password === PASSWORD && email === EMAIL) {
            res.status(STATUS_OK).json({ access: true });
        }
        else {
            res.status(STATUS_OK).json({ access: false });
        }
    } catch (error) {
        res.status(STATUS_ERR).json({ message: error });
    }
}


module.exports = {
    login,
}